import React from "react";
import styled from "styled-components";
import errorVector from "../../static/images/404-vector.svg";
import { useDarkMode } from "../context/darkMode";

const Container = styled.div`
  text-align: center;
`;

const NotFoundVector = styled.img`
  ${({ invert }) => invert && "filter: invert(1);"}
  width: 500px;
`;

const NotFoundMessage = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <Container>
      <h1>NOT FOUND</h1>
      <NotFoundVector invert={isDarkMode} src={errorVector} />
      <p>You just found a page that doesn&#39;t exist... oh the sadness.</p>
    </Container>
  );
};

export default NotFoundMessage;
