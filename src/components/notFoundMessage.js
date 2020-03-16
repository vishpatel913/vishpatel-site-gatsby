import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import vector from "../../static/images/404-vector.svg";

const Container = styled.div`
  text-align: center;
`;

const NotFoundVector = styled.img`
  ${({ invert }) => invert && "filter: invert(1);"}
  width: 500px;
`;

const NotFoundMessage = ({ isDarkMode }) => (
  <Container>
    <h1>NOT FOUND</h1>
    <NotFoundVector invert={isDarkMode} src={vector} />
    <p>You just found a page that doesn&#39;t exist... oh the sadness.</p>
  </Container>
);

const mapStateToProps = ({ isDarkMode }) => ({ isDarkMode });

export default connect(mapStateToProps, null)(NotFoundMessage);
