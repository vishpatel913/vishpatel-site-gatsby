import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import { Layout, Container, TabMenu, ImageGrid } from "../components";
import { workPages } from "../utils/config";

const PageContainer = styled.div``;

const WorkPage = ({ data, location }) => (
  <Layout page={location.pathname}>
    <PageContainer>
      <Container edge>
        <TabMenu links={workPages} />
      </Container>
      <ImageGrid data={data.allContentfulImage.edges} />
    </PageContainer>
  </Layout>
);

export default WorkPage;

export const query = graphql`
  {
    allContentfulImage(sort: { fields: [dateCreated], order: DESC }) {
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
