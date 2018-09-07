import React from 'react'
import styled from 'styled-components'

import ImageGrid from '../components/imageGrid'

const IndexPage = ({ data }) => {
  return (
    <div>
      <ImageGrid images={data.allContentfulImage.edges} />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query featuredImageQuery {
    allContentfulImage(filter: { featured: { eq: true } }) {
      edges {
        node {
          title
          slug
          featured
          photo {
            sizes(maxWidth: 800) {
              ...GatsbyContentfulSizes_tracedSVG
            }
          }
          dateCreated(formatString: "Do MMMM YYYY")
          category
          tags
        }
      }
    }
  }
`
