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

// const color = `${theme.dark.color.primary.slice(1)}80`;
export const editTracedSvg = (fluid, isDark = false) => ({
  ...fluid,
  tracedSVG: fluid?.tracedSVG?.replace(
    "d3d3d3",
    theme[isDark ? "dark" : "light"].secondary.slice(1)
  )
});
