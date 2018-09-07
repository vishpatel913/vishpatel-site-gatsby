export const capitalizeString = string => {
  return string
    .split(/\s|-/)
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')
}

export const getAltText = (title, category) => {
  switch (category) {
    case 'development':
      return 'Screenshot of ' + title
      break
    case 'design':
      return 'Design titled ' + title
      break
    case 'photography':
      return 'Photograph titled ' + title
      break
    default:
      return title
      break
  }
}

export const editTracedSvg = sizes => {
  const color = '#311B9255'
  const svgSrc = sizes.tracedSVG.replace('lightgray', color)
  let newSizes = sizes
  newSizes.tracedSVG = svgSrc
  return newSizes
}
