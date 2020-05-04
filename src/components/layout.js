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

const LayoutContainer = styled.main`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.bp.lg};

  & > * {
    margin: 2rem 3rem 0;
    @media (max-width: ${({ theme }) => theme.bp.md}) {
      margin: 2rem 2rem 0;
    }
    @media (max-width: ${({ theme }) => theme.bp.sm}) {
      margin: 0;
    }
  }
`;

const PageContainer = styled.div`
  background: ${({ white, theme }) => (white ? theme.color.white : "none")};
  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    padding-bottom: ${({ white }) => white && "2rem"};
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
        <LayoutContainer>
          <PageContainer white={white}>{children}</PageContainer>
        </LayoutContainer>
        <LayoutContainer>
          <Footer />
        </LayoutContainer>
      </SiteContainer>
    </ThemeProvider>
  );
};

export default Layout;
