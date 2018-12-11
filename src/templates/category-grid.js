import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SiteHead from '../components/siteHead'
import FilterMenu from '../components/filterMenu'
import ImageGrid from '../components/imageGrid'
import NotFoundMessage from '../components/not-found-message'
import { capitalizeString } from '../utils/helpers'

const PageContainer = styled.div``

const CategoryTemplate = ({ data, location }) => {
  return (
    <Layout page={location.pathname}>
      <PageContainer>
        <FilterMenu />
        {data.allContentfulImage ? (
          <ImageGrid images={data.allContentfulImage.edges} />
        ) : (
          <NotFoundMessage />
        )}
      </PageContainer>
    </Layout>
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
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid_tracedSVG
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
