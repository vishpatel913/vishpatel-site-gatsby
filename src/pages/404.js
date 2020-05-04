import React from "react";
import styled from "styled-components";

import { Layout, Container, NotFoundMessage } from "../components";

const PageContainer = styled(Container)`
  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    margin: 0 1rem;
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
