import React from "react";
import styled from "styled-components";
import { graphql, Link, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { capitalizeString, getAltText, getImageData } from "../utils";
import { Container, Layout, SiteHead } from "../components/layout";
import { MarkdownRenderer } from "../components/markdownRenderer";
import { Icon } from "../components/common";

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

const DateText = styled.span`
  display: block;
  margin-bottom: 4px;
`;

const CategoryLink = styled(Link)`
  display: inline-block;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.color.greyDark};
`;

const TagLink = styled.span`
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.color.greyDark};
  margin-right: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const Tag = ({ title }: { title?: string }) => {
  // const tagSlug = title.toLowerCase().split(" ").join("-");
  return <TagLink>{`#${title}`}</TagLink>;
};

const ImageTemplate = ({
  data,
  location
}: PageProps<Queries.ImagePostTemplateQuery>) => {
  const {
    title,
    photo,
    imageCaption,
    dateCreated,
    category,
    tags
    // slug
  } = data.contentfulImage ?? {};
  // const comments =
  //   data.allContentfulPostComment && data.allContentfulPostComment.edges;
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
            <DateText>{dateCreated}</DateText>
            {category ? (
              <CategoryLink
                to={`/work/${category}`}
                title={category ?? undefined}
              >
                <Icon name="category" />
                {capitalizeString(category)}
              </CategoryLink>
            ) : null}
          </ImageMetaContainer>
          {tags?.map((tag: any) => (
            <Tag key={tag} title={tag} />
          ))}
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
    # allContentfulPostComment(
    #   sort: { fields: [timestamp], order: DESC }
    #   filter: { postSlug: { eq: $slug } }
    # ) {
    #   edges {
    #     node {
    #       name
    #       message {
    #         message
    #       }
    #       timestamp
    #     }
    #   }
    # }
  }
`;
