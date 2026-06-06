import React from "react";
import { graphql, PageProps } from "gatsby";

import { Container, Layout } from "../components/layout";
import { TabMenu } from "../components/tabMenu";
import { ImageGrid } from "../components/imageGrid";
import { WORK_PAGES } from "../constants/config";

const WorkPage = ({ data, location }: PageProps<Queries.WorkPageQuery>) => (
  <Layout page={location.pathname}>
    <Container edge>
      <TabMenu links={WORK_PAGES} />
    </Container>
    <Container edge>
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
    </Container>
  </Layout>
);

export default WorkPage;

export const query = graphql`
  query WorkPage {
    allContentfulImage(sort: { dateCreated: DESC }) {
      edges {
        node {
          title
          slug
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
