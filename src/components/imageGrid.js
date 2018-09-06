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
  //   background: ${props => `url(${props.hoverImage}) no-repeat top center`};
  //   background: rgba(103, 86, 113, 1);
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

const ImageGridItem = ({ node }) => {
  const { title, slug, photo, category } = node

  return (
    <ImageContainer>
      <Link to={slug}>
        <ImagePost
          sizes={editTracedSvg(photo.sizes)}
          title={title}
          alt={getAltText(title, category)}
          imgStyle={{ padding: '8px' }}
          hoverImage={photo.sizes.tracedSVG}
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
