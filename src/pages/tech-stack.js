import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-component'

import { editTracedSvg } from '../utils/helpers'

const PageContainer = styled.div`
  margin: 0.5rem;
  background: white;

  @media (max-width: 768px) {
    margin: 0;
    padding: 1rem;
  }
`

const TitleContainer = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    padding-top: 1.5rem;
  }
`

const GridContainer = styled(Masonry)`
  margin: auto;
`

const TechContainer = styled.li`
  display: block;

  @media (max-width: 768px) {
    width: 50%;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
  }

  @media (min-width: 768px) {
    width: 33.3333%
    padding: 1rem 2rem;
    margin: 0;
  }

  @media (min-width: 992px) {
    width: 25%;
  }
`

const TechName = styled.h2`
  margin-top: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const TechGridItem = ({ node }) => {
  const { name, logo } = node

  return (
    <TechContainer>
      <Img
        sizes={editTracedSvg(logo.sizes)}
        title={name}
        alt={'Logo for ' + name}
      />
      <TechName>{name}</TechName>
    </TechContainer>
  )
}

const TechStackPage = ({ data }) => (
  <PageContainer>
    <TitleContainer>
      <h1>Tech Stack</h1>
      <p>Technologies used for development and design</p>
    </TitleContainer>
    <GridContainer elementType={'ul'}>
      {data.allContentfulTech.edges.map(({ node }) => {
        return <TechGridItem key={node.name} node={node} />
      })}
    </GridContainer>
  </PageContainer>
)

export default TechStackPage

export const query = graphql`
  query techStackQuery {
    allContentfulTech(sort: { fields: [name] }) {
      edges {
        node {
          name
          logo {
            sizes(maxWidth: 800) {
              ...GatsbyContentfulSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`
