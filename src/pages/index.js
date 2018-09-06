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
  query contentQuery {
    allContentfulImage(sort: { fields: [dateCreated], order: DESC }) {
      edges {
        node {
          title
          slug
          photo {
            sizes(maxWidth: 800) {
              ...GatsbyContentfulSizes_tracedSVG
            }
          }
          category
        }
      }
    }
  }
`
