import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Masonry from 'react-masonry-component'

const GridContainer = styled(Masonry)`
  margin: auto;
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: auto;
  }
`

const ImageContainer = styled.li`
  display: block;
  margin: 0;
  @media (min-width: 768px) {
    width: 50%;
    padding: 4px;
  }
  @media (min-width: 992px) {
    width: 33.33333%;
    padding: 4px;
  }
`

const ImageGridItem = ({ node }) => {
  return (
    <ImageContainer>
      <Link to={node.slug}>
        <img style={{ margin: 0 }} src={node.photo.file.url} />
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

const IndexPage = ({ data }) => {
  return (
    <div>
      <ImageGrid images={data.allContentfulImage.edges} />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query contentQuery {
    allContentfulImage(sort: { fields: [dateCreated], order: DESC }) {
      edges {
        node {
          title
          slug
          photo {
            file {
              url
            }
          }
          category
        }
      }
    }
  }
`
