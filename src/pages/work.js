import React from "react";
import { graphql } from "gatsby";

import { Layout, Container, TabMenu, ImageGrid } from "../components";
import { workPages } from "../utils/config";

const WorkPage = ({ data, location }) => (
  <Layout page={location.pathname}>
    <>
      <Container edge>
        <TabMenu links={workPages} />
      </Container>
      <ImageGrid data={data.allContentfulImage.edges} />
    </>
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
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
          dateCreated(formatString: "Do MMMM YYYY")
          category
          tags
        }
      }
    }
  }
`;
