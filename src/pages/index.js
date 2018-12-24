import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import ImageGrid from "../components/imageGrid";

const IndexPage = ({ data, location }) => (
  <Layout page={location.pathname}>
    <div>
      <ImageGrid data={data.allContentfulImage.edges} />
    </div>
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
