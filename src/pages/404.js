import React from "react";
import styled from "styled-components";

import {
  Layout,
  Container,
  // BreakoutGame,
  NotFoundMessage
} from "../components";

const PageContainer = styled(Container)`
  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    margin: 0 1rem;
  }
`;

const PageNotFound = () => (
  <Layout page="/404">
    <PageContainer>
      {/* <BreakoutGame width={600} height={450} /> */}
      <NotFoundMessage />
    </PageContainer>
  </Layout>
);

export default PageNotFound;
