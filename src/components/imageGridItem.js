import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { getAltText, editTracedSvg } from "../utils";
import { useDarkMode } from "../context/darkMode";

const ImageContainer = styled.li`
  display: block;
  padding: 0.5rem;
  width: 33.33333%;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.bp.xs}) {
    width: 100%;
  }
`;

const ImagePost = styled(Img)`
  @media (min-width: ${({ theme }) => theme.bp.sm}) {
    &:after {
      content: "";
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
      ${({ hoverText }) =>
        hoverText ? `content: '${hoverText}';` : "content: 'View';"};
      opacity: 1;
    }
  }
`;

const ImageGridItem = ({ node }) => {
  const { title, slug, photo, category } = node;
  const { isDarkMode } = useDarkMode();

  return (
    <ImageContainer>
      <Link to={`/${slug}`}>
        <ImagePost
          fluid={editTracedSvg(photo.fluid, isDarkMode)}
          title={title}
          alt={getAltText(title, category)}
          hoverText={title}
          imgStyle={isDarkMode && { filter: "brightness(80%) sepia(10%)" }}
        />
      </Link>
    </ImageContainer>
  );
};

export default ImageGridItem;
