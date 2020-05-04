import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import {
  Layout,
  Container,
  TabMenu,
  ImageGrid,
  NotFoundMessage
} from "../components";
import { workPages } from "../utils/config";

const PageContainer = styled.div``;

const ErrorContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    margin: 0 1rem;
    padding-top: 1rem;
  }
`;

const CategoryTemplate = ({ data, location }) => (
  <Layout page={location.pathname}>
    <PageContainer>
      <Container edge>
        <TabMenu links={workPages} />
      </Container>
      {data.allContentfulImage.edges.length > 0 ? (
        <ImageGrid data={data.allContentfulImage.edges} />
      ) : (
        <ErrorContainer>
          <NotFoundMessage />
        </ErrorContainer>
      )}
    </PageContainer>
  </Layout>
);

export default CategoryTemplate;

export const query = graphql`
  query($slug: String!) {
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
`;
