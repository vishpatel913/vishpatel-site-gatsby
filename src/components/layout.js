import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { SiteHead, Header, Footer } from ".";
import themeConfig from "../assets/theme";
import { useDarkMode } from "../context/darkMode";

const SiteContainer = styled.div`
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.main};
  min-height: 100%;
`;

const BodyContainer = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    margin: 0;
  }
`;

const PageContainer = styled.div`
  background: ${({ white, theme }) => (white ? theme.color.white : "none")};
  margin: 2rem;
  padding-bottom: ${({ white }) => white && "1.5rem"};

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    margin: 0;
  }
`;

const Layout = ({ children, page, white }) => {
  const { isDarkMode } = useDarkMode();
  const color = themeConfig[isDarkMode ? "dark" : "light"];

  return (
    <ThemeProvider theme={{ ...themeConfig, color }}>
      <SiteContainer>
        <SiteHead page={page} />
        <Header />
        <BodyContainer>
          <PageContainer white={white}>{children}</PageContainer>
        </BodyContainer>
        <Footer />
      </SiteContainer>
    </ThemeProvider>
  );
};

export default Layout;
