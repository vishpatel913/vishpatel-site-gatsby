import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import MarkdownRenderer from "../components/markdownRenderer";
import CommentForm from "../components/commentForm";
import CommentList from "../components/commentList";
import SiteHead from "../components/siteHead";
import Icon from "../components/icon";
import { capitalizeString, getAltText, editTracedSvg } from "../utils/helpers";

const PostContainer = styled.div`
  background: ${({ theme }) => theme.color.white};
  margin: 0.5rem;

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;

const FlexContainer = styled.div`
  @media (min-width: 992px) {
    display: flex;
  }
`;

const ImageContainer = styled.div`
  @media (min-width: 992px) {
    flex: 2;
  }
`;

const ContentContainer = styled.div`
  @media (min-width: 992px) {
    flex: 1;
    padding: 1.5rem;
  }
  @media (max-width: 992px) {
    padding: 2rem;
    max-width: 80%;
    margin: auto;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CommentContainer = styled.div`
  padding: 2rem;
  max-width: 80%;
  margin: auto;

  @media (max-width: 992px) {
    padding-top: 0;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const PostImage = styled(Img)`
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
  text-decoration: none;
  color: ${({ theme }) => theme.color.greyDark};

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
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

const Tag = ({ title }) => {
  const tagSlug = title
    .toLowerCase()
    .split(" ")
    .join("-");
  return <TagLink to={`tag/${tagSlug}`}>{`#${title}`}</TagLink>;
};

Tag.propTypes = {
  title: PropTypes.string
};

const ImageTemplate = ({ data, location, isDarkMode }) => {
  const {
    title, photo, imageCaption, dateCreated, category, tags, slug
  } = data.contentfulImage;
  const comments = data.allContentfulPostComment && data.allContentfulPostComment.edges;
  const metaDescription = imageCaption ? imageCaption.imageCaption : getAltText(title, category);

  return (
    <Layout page={location.pathname}>
      <SiteHead title={title} description={metaDescription} keywords={tags} />
      <PostContainer>
        <FlexContainer>
          <ImageContainer>
            <PostImage
              fluid={editTracedSvg(photo.fluid, isDarkMode)}
              title={title}
              alt={getAltText(title, category)}
            />
          </ImageContainer>
          <ContentContainer>
            <h1>{title}</h1>
            {imageCaption && (
              <MarkdownRenderer source={imageCaption.childMarkdownRemark.rawMarkdownBody} />
            )}
            <ImageMetaContainer>
              <DateText>{dateCreated}</DateText>
              <CategoryLink to={`/work/${category}`}>
                <Icon name="category" />
                {capitalizeString(category)}
              </CategoryLink>
            </ImageMetaContainer>
            {tags.sort().map(tag => (
              <Tag key={tag} title={tag} />
            ))}
          </ContentContainer>
        </FlexContainer>
        <CommentContainer>
          {comments && <CommentList data={comments} />}
          <CommentForm slug={slug} />
        </CommentContainer>
      </PostContainer>
    </Layout>
  );
};

ImageTemplate.propTypes = {
  isDarkMode: PropTypes.bool
};

const mapStateToProps = ({ isDarkMode }) => ({ isDarkMode });

export default connect(mapStateToProps, null)(ImageTemplate);

export const query = graphql`
  query($slug: String!) {
    contentfulImage(slug: { eq: $slug }) {
      title
      slug
      photo {
        fluid(maxWidth: 900) {
          ...GatsbyContentfulFluid_tracedSVG
        }
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
    allContentfulPostComment(
      sort: { fields: [timestamp], order: DESC }
      filter: { postSlug: { eq: $slug } }
    ) {
      edges {
        node {
          name
          message {
            message
          }
          timestamp
        }
      }
    }
  }
`;
