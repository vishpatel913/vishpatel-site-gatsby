import React from 'react'
import styled from 'styled-components'

import FilterMenu from '../components/filterMenu'
import ImageGrid from '../components/imageGrid'
import NotFoundPage from '../pages/404'

const IndexPage = ({ data }) => {
  return (
    <div>
      <FilterMenu />
      {data.allContentfulImage ? (
        <ImageGrid images={data.allContentfulImage.edges} />
      ) : (
        <NotFoundPage />
      )}
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query categoryImageQuery($slug: String!) {
    allContentfulImage(
      sort: { fields: [dateCreated], order: DESC }
      filter: { category: { eq: $slug } }
    ) {
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
