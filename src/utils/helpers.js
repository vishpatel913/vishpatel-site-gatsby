export const capitalizeString = string => {
  return string.slice(0, 1).toUpperCase() + string.slice(1)
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
