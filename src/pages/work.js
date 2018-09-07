import React from 'react'
import styled from 'styled-components'

import FilterMenu from '../components/filterMenu'
import ImageGrid from '../components/imageGrid'

const WorkPage = ({ data }) => {
  return (
    <div>
      <FilterMenu />
      <ImageGrid images={data.allContentfulImage.edges} />
    </div>
  )
}

export default WorkPage

export const query = graphql`
  query allImageQuery {
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
          dateCreated(formatString: "Do MMMM YYYY")
          category
          tags
        }
      }
    }
  }
`
