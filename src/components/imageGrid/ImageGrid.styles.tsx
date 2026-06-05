import styled from "styled-components";

import { GatsbyImage } from "gatsby-plugin-image";

// CSS multi-column masonry — items flow top-to-bottom within each column.
// Replaces react-masonry-component (no runtime JS, no dependency).
export const GridContainer = styled.ul`
  margin: -0.5rem;
  padding: 0;
  list-style: none;
  column-count: 3;
  column-gap: 0;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    column-count: 2;
  }

  @media (max-width: ${({ theme }) => theme.bp.xs}) {
    column-count: 1;
  }
`;

export const ImageContainer = styled.li`
  display: inline-block;
  width: 100%;
  padding: 0.5rem;
  margin: 0;
  break-inside: avoid;
`;

export const ImagePost = styled(GatsbyImage)<{ $hoverText?: string }>`
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
      ${({ $hoverText }) =>
        $hoverText ? `content: '${$hoverText}';` : "content: 'View';"};
      opacity: 1;
    }
  }
`;
