import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import { Layout, TechItem } from "../components";

const PageContainer = styled.div`
  margin: 0.5rem;
  background: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    margin: 0;
    padding: 1rem;
  }
`;

const TitleContainer = styled.div`
  padding: 1.5em 1.5em 0;
  text-align: center;
  width: 80%;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    text-align: left;
  }

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    width: 100%;
  }
`;

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1.5rem;
  margin: 0;
  row-gap: 1rem;
  column-gap: 2rem;

  @media (max-width: ${({ theme }) => theme.bp.md}) and (min-width: ${({
      theme
    }) => theme.bp.sm}) {
    grid-template-columns: 1fr 1fr;
    width: 80%;
    margin: auto;
  }

  @media (max-width: ${({ theme }) => theme.bp.xs}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }
`;

const TechStackPage = ({ data, location }) => (
  <Layout page={location.pathname}>
    <PageContainer>
      <TitleContainer>
        <h1>Tech Stack</h1>
        <p>Technologies used for development and design</p>
      </TitleContainer>
      <GridContainer>
        {data.allContentfulTech.edges.map(({ node }) => (
          <TechItem key={node.name} node={node} />
        ))}
      </GridContainer>
    </PageContainer>
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
          # category
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
