import React from "react";
import styled from "styled-components";

import { Layout, NotFoundMessage } from "../components";

const PageContainer = styled.div`
  margin: 0.5rem;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    margin: 0 1rem;
    padding-top: 1rem;
  }
`;

const PageNotFound = () => (
  <Layout page="404">
    <PageContainer>
      <NotFoundMessage />
    </PageContainer>
  </Layout>
);

export default PageNotFound;
