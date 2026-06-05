import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div<{ $full?: boolean; $content?: boolean }>`
  padding: ${({ $full }) => ($full ? "0 0 1.5rem" : "1.5rem")};
  margin: ${({ $content }) => ($content ? "0 auto" : 0)};
  max-width: ${({ $content }) => $content && "80%"};
  :not(:last-child) {
    padding-bottom: ${({ $content }) => $content && "0"};
  }

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    max-width: 100%;
    padding: ${({ $full }) => ($full ? "1rem 0" : "2rem")};
    padding-bottom: 0;
  }
`;

type Props = {
  edge?: boolean;
  content?: boolean;
  element?: keyof React.JSX.IntrinsicElements;
};

const Container: React.FC<React.PropsWithChildren<Props>> = ({
  edge,
  content,
  element,
  children
}) => {
  const ElementContainer = element
    ? StyledContainer.withComponent(element)
    : StyledContainer;
  return (
    <ElementContainer $full={edge} $content={content}>
      {children}
    </ElementContainer>
  );
};

export default Container;
