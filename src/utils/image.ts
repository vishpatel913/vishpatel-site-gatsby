import { getImage, ImageDataLike } from "gatsby-plugin-image";

export const getAltText = (title?: string, category?: string) => {
  switch (category) {
    case "development":
      return title ? `Screenshot of ${title}` : "Screenshot";
    case "design":
      return title ? `Design titled ${title}` : "Design";
    case "photography":
      return title ? `Photograph titled ${title}` : "Photograph";
    default:
      return title ?? "";
  }
};

export const getImageData = (node: ImageDataLike | null) => getImage(node);
