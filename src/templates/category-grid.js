import React from 'react'
import styled from 'styled-components'

import SiteHead from '../components/siteHead'
import FilterMenu from '../components/filterMenu'
import ImageGrid from '../components/imageGrid'
import NotFoundPage from '../pages/404'
import { capitalizeString } from '../utils/helpers'

const PageContainer = styled.div``

const CategoryTemplate = ({ data }) => {
  return (
    <PageContainer>
      <FilterMenu />
      {data.allContentfulImage ? (
        <ImageGrid images={data.allContentfulImage.edges} />
      ) : (
        <NotFoundPage />
      )}
    </PageContainer>
  )
}

export default CategoryTemplate

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
