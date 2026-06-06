import React from "react";
import styled from "styled-components";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { capitalizeString, getAltText, getImageData } from "../utils";
import { Container, Layout, SiteHead } from "../components/layout";
import { MarkdownRenderer } from "../components/markdownRenderer";
import { Link } from "../components/common";

const HeaderContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.bp.md}) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
  }
`;

const ContentContainer = styled(Container)`
  @media (min-width: ${({ theme }) => theme.bp.md}) {
    margin: 0;
  }
`;

const PostImage = styled(GatsbyImage)`
  width: 100%;
  margin: 0;
`;

const ImageMetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  color: ${({ theme }) => theme.color.greyDark};

  &:before {
    content: "";
    display: block;
    width: 48px;
    height: 2px;
    background: ${({ theme }) => theme.color.grey};
    margin-bottom: 1rem;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TagLink = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.color.greyDark};

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const ImageTemplate = ({
  data,
  location
}: PageProps<Queries.ImagePostTemplateQuery>) => {
  const { title, photo, imageCaption, dateCreated, category, tags } =
    data.contentfulImage ?? {};
  const metaDescription = imageCaption
    ? imageCaption.imageCaption
    : getAltText(title ?? undefined, category ?? undefined);
  const imageData = photo && getImageData(photo);

  return (
    <Layout white page={location.pathname}>
      <SiteHead
        title={title ?? undefined}
        description={metaDescription ?? undefined}
        keywords={tags?.join(", ") ?? undefined}
      />
      <HeaderContainer>
        {imageData ? (
          <PostImage
            image={imageData}
            title={title ?? undefined}
            alt={metaDescription ?? ""}
          />
        ) : null}
        <ContentContainer content>
          <h1>{title}</h1>
          {imageCaption && (
            <MarkdownRenderer
              source={
                imageCaption.childMarkdownRemark?.rawMarkdownBody ?? undefined
              }
            />
          )}
          <ImageMetaContainer>
            <span>{dateCreated}</span>
            {category ? (
              <Link
                href={`/work/${category}`}
                title={category ?? undefined}
                icon="category"
              >
                {capitalizeString(category)}
              </Link>
            ) : null}
            <TagContainer>
              {tags?.map((tag: any) => (
                <TagLink key={tag}>{`#${tag}`}</TagLink>
              ))}
            </TagContainer>
          </ImageMetaContainer>
        </ContentContainer>
      </HeaderContainer>
    </Layout>
  );
};

export default ImageTemplate;

export const query = graphql`
  query ImagePostTemplate($slug: String!) {
    contentfulImage(slug: { eq: $slug }) {
      title
      slug
      photo {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      imageCaption {
        imageCaption
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      dateCreated(formatString: "Do MMMM YYYY")
      category
      tags
    }
  }
`;
