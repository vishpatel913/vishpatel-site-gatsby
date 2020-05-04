import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: ${({ edge }) => (edge ? 0 : "1.5rem")};
  padding-bottom: 1.5rem;
  margin: ${({ content }) => (content ? "0 auto" : 0)};
  max-width: ${({ content }) => content && "80%"};

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    max-width: 100%;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

const Container = props => (
  <StyledContainer {...props}>{props.children}</StyledContainer>
);

export default Container;
