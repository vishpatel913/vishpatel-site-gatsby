import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-component'

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
    padding: 0.5rem;
    margin: 0;
  }

  @media (min-width: 992px) {
    width: 33.33333%;
  }
`

const ImagePost = styled(Img)`
  @media (min-width: 768px) {
    &:after {
      content: '';
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: all 0.5s ease 0s;
      color: white;
      font-size: 20px;
      padding: 1rem;
      font-weight: 700;
      text-align: center;
    }

    &:hover:after {
      ${({ hoverText }) =>
        hoverText ? `content: '${hoverText}';` : `content: 'View';`};
      opacity: 1;
    }
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
          hoverText={title}
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
