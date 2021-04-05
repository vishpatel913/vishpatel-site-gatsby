import { getImage } from "gatsby-plugin-image";
import theme from "../styles/theme";

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

const editTracedSvg = (image, hex) => ({
  ...image,
  placeholder: {
    ...image?.placeholder,
    fallback: image?.placeholder?.fallback?.replace("d3d3d3", hex.slice(1))
  }
});

export const getImageWithTracedSVG = (gatsbyImage, isDark = false) => {
  const color = theme[isDark ? "dark" : "light"].secondary;
  const image = getImage(gatsbyImage);
  return editTracedSvg(image, color);
};
