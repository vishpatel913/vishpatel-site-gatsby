// import theme from "../assets/theme";

export const capitalizeString = string => string
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

export const editTracedSvg = fluid => {
  // const color = `${colors.secondary.slice(1)}80`;
  const newFluid = fluid;
  // newFluid.tracedSVG = fluid.tracedSVG.replace("d3d3d3", color);
  return newFluid;
};
