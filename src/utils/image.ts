import { getImage, ImageDataLike } from "gatsby-plugin-image";

export const getAltText = (title: string, category?: string) => {
  switch (category) {
    case "development":
      return `Screenshot of ${title}`;
    case "design":
      return `Design titled ${title}`;
    case "photography":
      return `Photograph titled ${title}`;
    default:
      return title;
  }
};

export const getImageData = (node: ImageDataLike | null) => getImage(node);
