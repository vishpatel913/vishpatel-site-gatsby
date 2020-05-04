import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: ${({ edge }) => (edge ? "0 0 1.5rem" : "1.5rem")};
  margin: ${({ content }) => (content ? "0 auto" : 0)};
  max-width: ${({ content }) => content && "80%"};
  :not(:last-child) {
    padding-bottom: ${({ content }) => content && "0"};
  }

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    max-width: 100%;
    padding: ${({ edge }) => (edge ? "1rem 0" : "2rem")};
    padding-bottom: 0;
  }
`;

const Container = props => {
  const ElementContainer = props.element
    ? StyledContainer.withComponent(props.element)
    : StyledContainer;

  return <ElementContainer {...props}>{props.children}</ElementContainer>;
};

export default Container;
