import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";

import SiteHead from "./siteHead";
import Header from "./header";
import Footer from "./footer";
import themeConfig from "../assets/theme";
import DarkModeContext from "../context/darkModeContext";

const SiteContainer = styled.div`
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.main};
  min-height: 100%;
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

const Layout = ({ children, page }) => {
  const { isDarkMode } = useContext(DarkModeContext);
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

export default Layout;
