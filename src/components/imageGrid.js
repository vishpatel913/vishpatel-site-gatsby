import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Masonry from 'react-masonry-component'

const GridContainer = styled(Masonry)`
  margin: auto;

  @media (max-width: 768px) {
    margin: 0 1rem;
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

  @media (min-width: 768px) {
    width: 50%;
    padding: 8px 8px 8px;
    margin: 0;
  }

  @media (min-width: 992px) {
    width: 33.33333%;
  }
`

const ImageGridItem = ({ node }) => {
  return (
    <ImageContainer>
      <Link to={node.slug}>
        <img style={{ background: 'white' }} src={node.photo.file.url} />
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
