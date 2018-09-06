import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'

const GridContainer = styled(Masonry)`
  margin: auto;

  @media (max-width: 768px) {
    margin: 0 1rem;
    padding-top: 1rem;
  }

  // @media (min-width: 768px) {
  //   width: 750px;
  // }
  //
  // @media (min-width: 992px) {
  //   width: auto;
  // }
`

const ImageContainer = styled.li`
  display: block;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    width: 50%;
    padding: 8px;
    margin: 0;
  }

  @media (min-width: 992px) {
    width: 33.33333%;
  }
`

// TODO: Implement image hover
const ImagePost = styled(Img)`
  background: white;

  // &:after {
  //   content: '';
  //   display: block;
  //   position: absolute;
  //   height: 100%;
  //   width: 100%;
  //   top: 0;
  //   left: 0;
  //   background-image: url('${props => props.hoverImage}');
  //   background: rgba(200, 200, 200, 0.28);
  //   transition: opacity 0.5s ease 0s;
  //   object-fit: cover;
  //   object-position: center center;
  //   opacity: 0;
  //   padding: 8px;
  // }
  //
  // &:hover:after {
  //   opacity: 1;
  // }
`

const editTracedSvg = sizes => {
  const color = '#311B9255'
  const svgSrc = sizes.tracedSVG.replace('lightgray', color)
  let newSizes = sizes
  newSizes.tracedSVG = svgSrc
  return newSizes
}

const ImageGridItem = ({ node }) => {
  let altTag = ''
  switch (node.category) {
    case 'development':
      altTag = 'Screenshot of '
      break
    case 'design':
      altTag = 'Design titled '
      break
    case 'photography':
      altTag = 'Photograph titled '
      break
    default:
      altTag = ''
      break
  }

  return (
    <ImageContainer>
      <Link to={node.slug}>
        <ImagePost
          sizes={editTracedSvg(node.photo.sizes)}
          title={node.title}
          alt={altTag + node.title}
          imgStyle={{ padding: '8px' }}
          hoverImage={node.photo.sizes.tracedSVG}
        />
      </Link>
    </ImageContainer>
  )
}

const ImageGrid = ({ images }) => {
  return (
    <GridContainer elementType={'ul'}>
      {images.map(({ node }) => {
        return <ImageGridItem key={node.slug} node={node} />
      })}
    </GridContainer>
  )
}

export default ImageGrid
