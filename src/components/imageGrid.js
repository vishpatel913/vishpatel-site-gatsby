import React from "react";
import styled from "styled-components";

import Masonry from "react-masonry-component";
import { ImageGridItem } from ".";

const GridContainer = styled(Masonry)`
  margin: auto;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    margin: 0 1rem;
    padding-top: 1rem;
  }
`;

const ImageGrid = ({ data }) => (
  <GridContainer elementType="ul">
    {data.map(({ node }) => (
      <ImageGridItem key={node.slug} node={node} />
    ))}
  </GridContainer>
);

export default ImageGrid;
