import React from "react";
import { graphql } from "gatsby";

import { Layout, ImageGrid } from "../components";

const IndexPage = ({ data, location }) => (
  <Layout page={location.pathname}>
    <ImageGrid data={data.allContentfulImage.edges} />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  {
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
