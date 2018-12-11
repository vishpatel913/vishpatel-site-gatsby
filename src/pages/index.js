import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ImageGrid from '../components/imageGrid'

const IndexPage = ({ data, location }) => {
  return (
    <Layout page={location.pathname}>
      <div>
        <ImageGrid images={data.allContentfulImage.edges} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query featuredImageQuery {
    allContentfulImage(
      filter: { featured: { eq: true } }
      sort: { fields: [updatedAt], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          featured
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
