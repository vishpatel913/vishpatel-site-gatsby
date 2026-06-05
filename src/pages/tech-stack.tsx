import React from "react";
import styled from "styled-components";
import { graphql, PageProps } from "gatsby";

import { Layout, Container } from "../components/layout";
import { TechItem } from "../components/techItem";

const GridContainer = styled.div`
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

const TechStackPage = ({
  data,
  location
}: PageProps<Queries.TechStackPageQuery>) => (
  <Layout white page={location.pathname}>
    <Container content>
      <h1>Tech Stack</h1>
      <p>Technologies used for development and design</p>
    </Container>
    <Container content>
      <GridContainer>
        {data.allContentfulTech.edges.map(({ node }) => (
          <TechItem
            key={node.name}
            name={node.name ?? undefined}
            logo={node.logo?.gatsbyImageData ?? undefined}
            competence={node.competence ?? undefined}
          />
        ))}
      </GridContainer>
    </Container>
  </Layout>
);

export default TechStackPage;

export const query = graphql`
  query TechStackPage {
    allContentfulTech(sort: [{ order: ASC }, { competence: DESC }]) {
      edges {
        node {
          name
          competence
          logo {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
