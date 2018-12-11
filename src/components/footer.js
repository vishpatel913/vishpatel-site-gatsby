import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  margin: 0 auto;
  text-align: center;
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

const Footer = () => (
  <Container>
    <a href="https://www.contentful.com/" rel="noopener noreferrer" target="_blank">
      <ContentfulLogo
        src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
        alt="Powered by Contentful"
      />
    </a>
  </Container>
);

export default Footer;
