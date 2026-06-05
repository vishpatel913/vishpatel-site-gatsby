import React from "react";
import { graphql, PageProps } from "gatsby";

import { Layout } from "../components/layout";
import { ImageGrid } from "../components/imageGrid";

const IndexPage = ({ data, location }: PageProps<Queries.IndexPageQuery>) => (
  <Layout page={location.pathname}>
    <ImageGrid>
      {data.allContentfulImage.edges.map(({ node }) => (
        <ImageGrid.Item
          key={node.slug}
          title={node.title ?? undefined}
          slug={node.slug ?? undefined}
          photo={node.photo?.gatsbyImageData ?? undefined}
          category={node.category ?? undefined}
        />
      ))}
    </ImageGrid>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexPage {
    allContentfulImage(
      filter: { featured: { eq: true } }
      sort: { updatedAt: DESC }
    ) {
      edges {
        node {
          title
          slug
          featured
          photo {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
          dateCreated(formatString: "Do MMMM YYYY")
          category
          tags
        }
      }
    }
  }
`;
