export const capitalizeString = (value: string) =>
  value
    .split(/\s|-/)
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
