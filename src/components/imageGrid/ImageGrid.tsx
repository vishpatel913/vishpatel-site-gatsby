// TODO: fix styles for < 3 photos
import React from "react";

import { GridContainer } from "./ImageGrid.styles";
import ImageGridItem from "./ImageGridItem";

const ImageGrid = ({ children }: React.PropsWithChildren) => (
  <GridContainer>{children}</GridContainer>
);

ImageGrid.Item = ImageGridItem;

export default ImageGrid;
