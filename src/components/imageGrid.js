import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Masonry from "react-masonry-component";

import { getAltText, editTracedSvg } from "../utils/helpers";

const GridContainer = styled(Masonry)`
  margin: auto;

  @media (max-width: 768px) {
    margin: 0 1rem;
    padding-top: 1rem;
  }
`;

const ImageContainer = styled.li`
  display: block;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    width: 50%;
    padding: 0.5rem;
    margin: 0;
  }

  @media (min-width: 992px) {
    width: 33.33333%;
  }
`;

const ImagePost = styled(Img)`
  @media (min-width: 768px) {
    &:after {
      content: '';
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: all 0.5s ease 0s;
      color: white;
      font-size: 20px;
      padding: 1rem;
      font-weight: 700;
      text-align: center;
    }

    &:hover:after {
      ${({ hoverText }) => (hoverText ? `content: '${hoverText}';` : "content: 'View';")};
      opacity: 1;
    }
  }
`;

const ImageGridItem = ({ node, isDarkMode }) => {
  const {
    title, slug, photo, category
  } = node;

  return (
    <ImageContainer>
      <Link to={`/${slug}`}>
        <ImagePost
          fluid={editTracedSvg(photo.fluid)}
          title={title}
          alt={getAltText(title, category)}
          hoverText={title}
          imgStyle={isDarkMode && { filter: "brightness(80%) sepia(10%)" }}
        />
      </Link>
    </ImageContainer>
  );
};

ImageGridItem.propTypes = {
  isDarkMode: PropTypes.bool
};

const ImageGrid = ({ data, isDarkMode }) => (
  <GridContainer elementType="ul">
    {data.map(({ node }) => (
      <ImageGridItem key={node.slug} node={node} isDarkMode={isDarkMode} />
    ))}
  </GridContainer>
);

ImageGrid.propTypes = {
  isDarkMode: PropTypes.bool
};

const mapStateToProps = ({ isDarkMode }) => ({ isDarkMode });

export default connect(
  mapStateToProps,
  null
)(ImageGrid);
