import { getImage } from "gatsby-plugin-image";

export const capitalizeString = string =>
  string
    .split(/\s|-/)
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");

export const getAltText = (title, category) => {
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

export const getImageData = gatsbyImage => getImage(gatsbyImage);
