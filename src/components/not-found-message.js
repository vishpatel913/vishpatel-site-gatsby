import React from "react";
import styled from "styled-components";
import vector from "../../static/images/404-vector.svg";

const Container = styled.div`
  text-align: center;
`;

const NotFoundVector = styled.img`
  width: 500px;
`;

const NotFoundMessage = () => (
  <Container>
    <h1>NOT FOUND</h1>
    <NotFoundVector src={vector} />
    <p>You just found a page that doesn&#39;t exist... oh the sadness.</p>
  </Container>
);

export default NotFoundMessage;
