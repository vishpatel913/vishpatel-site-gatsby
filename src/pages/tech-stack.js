import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import { Layout, Container, TechItem } from "../components";

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0;
  row-gap: 1rem;
  column-gap: 2rem;

  @media (min-width: ${({ theme }) => theme.bp.sm}) and (max-width: ${({
      theme
    }) => theme.bp.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.bp.xs}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }
`;

const TechStackPage = ({ data, location }) => (
  <Layout white page={location.pathname}>
    <>
      <Container content>
        <h1>Tech Stack</h1>
        <p>Technologies used for development and design</p>
      </Container>
      <GridContainer content element="ul">
        {data.allContentfulTech.edges.map(({ node }) => (
          <TechItem key={node.name} node={node} />
        ))}
      </GridContainer>
    </>
  </Layout>
);

export default TechStackPage;

export const query = graphql`
  {
    allContentfulTech(
      sort: { fields: [order, competence], order: [ASC, DESC] }
    ) {
      edges {
        node {
          name
          competence
          logo {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
