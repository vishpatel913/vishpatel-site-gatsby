import React, { useContext } from "react";
import styled from "styled-components";

import DarkModeToggle from "./darkModeToggle";
import DarkModeContext from "../context/darkModeContext";

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0.5rem 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ContentfulLogo = styled.img`
  max-width: 100px;
  width: 100%;
  filter: opacity(0.7);
  transition: all 0.2s ease 0s;

  &:hover {
    filter: opacity(1);
  }
`;

const Footer = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const imgSrc = `https://images.ctfassets.net/fo9twyrwpveg/${isDarkMode ? "7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6" : "44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55"}/PoweredByContentful_${isDarkMode ? "Dark" : "Light"}Background.svg`;
  return (
    <Container>
      <a href="https://www.contentful.com/" rel="noopener noreferrer" target="_blank">
        <ContentfulLogo
          src={imgSrc}
          alt="Powered by Contentful"
        />
      </a>
      <DarkModeToggle />
    </Container>
  );
};


export default Footer;
