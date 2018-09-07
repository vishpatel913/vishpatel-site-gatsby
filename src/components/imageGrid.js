import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'

import { getAltText, editTracedSvg } from '../utils/helpers'

const GridContainer = styled(Masonry)`
  margin: auto;

  @media (max-width: 768px) {
    margin: 0 1rem;
    padding-top: 1rem;
  }
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

const ImagePost = styled(Img)`
  // background: white;
  opacity: 1;
  transition: all 0.5s ease 0s;

  &:hover {
    opacity: 0.7;
  }
`

const ImageGridItem = ({ node }) => {
  const { title, slug, photo, category } = node

  return (
    <ImageContainer>
      <Link to={'/' + slug}>
        <ImagePost
          sizes={editTracedSvg(photo.sizes)}
          title={title}
          alt={getAltText(title, category)}
          imgStyle={{ padding: '0px' }}
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
