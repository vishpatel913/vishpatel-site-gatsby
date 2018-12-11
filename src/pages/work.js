import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import FilterMenu from "../components/filterMenu";
import ImageGrid from "../components/imageGrid";

const PageContainer = styled.div``;

const WorkPage = ({ data, location }) => (
  <Layout page={location.pathname}>
    <PageContainer>
      <FilterMenu />
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
