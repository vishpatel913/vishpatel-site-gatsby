import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { connect } from "react-redux";

import SiteHead from "./siteHead";
import Header from "./header";
import Footer from "./footer";
import themeConfig from "../assets/theme";

const SiteContainer = styled.div`
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.main};
  min-height: 100%;

  & a {
    text-decoration: "none";
    color: ${({ theme }) => theme.color.primary};
  }

  & a:hover {
    color: ${({ theme }) => theme.color.primaryLight};
  }
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

const Layout = ({ children, page, isDarkMode }) => {
  const themeColor = themeConfig[isDarkMode ? "dark" : "light"];
  const updatedTheme = { ...themeConfig, ...themeColor };

  return (
    <ThemeProvider theme={updatedTheme}>
      <SiteContainer>
        <SiteHead page={page} />
        <Header />
        <BodyContainer>{children}</BodyContainer>
        <Footer />
      </SiteContainer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  page: PropTypes.string,
  isDarkMode: PropTypes.bool
};

const mapStateToProps = ({ isDarkMode }) => ({ isDarkMode });

export default connect(
  mapStateToProps,
  null
)(Layout);
