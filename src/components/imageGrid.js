import React from "react";
import styled from "styled-components";

import Masonry from "react-masonry-component";
import { ImageGridItem } from ".";

const GridContainer = styled(Masonry)`
  margin: -0.5rem;
  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    margin: 0.5rem;
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
