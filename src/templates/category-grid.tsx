import React from "react";
import styled from "styled-components";
import { graphql, PageProps } from "gatsby";

import { WORK_PAGES } from "../constants/config";
import { Container, Layout } from "../components/layout";
import { TabMenu } from "../components/tabMenu";
import { ImageGrid } from "../components/imageGrid";
import NotFoundMessage from "../components/NotFound";

const PageContainer = styled.div``;

const ErrorContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    margin: 0 1rem;
    padding-top: 1rem;
  }
`;

const CategoryTemplate = ({
  data,
  location
}: PageProps<Queries.WorkCategoryTemplateQuery>) => (
  <Layout page={location.pathname}>
    <PageContainer>
      <Container edge>
        <TabMenu links={WORK_PAGES} />
      </Container>
      <Container edge>
        {data.allContentfulImage.edges.length > 0 ? (
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
        ) : (
          <ErrorContainer>
            <NotFoundMessage />
          </ErrorContainer>
        )}
      </Container>
    </PageContainer>
  </Layout>
);

export default CategoryTemplate;

export const query = graphql`
  query WorkCategoryTemplate($slug: String!) {
    allContentfulImage(
      sort: { dateCreated: DESC }
      filter: { category: { eq: $slug } }
    ) {
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
