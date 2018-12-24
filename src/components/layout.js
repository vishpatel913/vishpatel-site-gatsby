import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SiteHead from "./siteHead";
import Header from "./header";
import Footer from "./footer";
import colors from "../utils/colors";

const SiteContainer = styled.div`
  background: ${colors.background};
`;

const BodyContainer = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
  padding: 1.5rem 2rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Layout = ({ children, page }) => (
  <SiteContainer>
    <SiteHead page={page} />
    <Header />
    <BodyContainer>{children}</BodyContainer>
    <Footer />
  </SiteContainer>
);

Layout.propTypes = {
  page: PropTypes.string
};

export default Layout;
