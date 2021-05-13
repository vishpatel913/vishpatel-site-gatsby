import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import logo from "../../static/images/logo.svg";
import logoLight from "../../static/images/logo-light.svg";
import resumePdf from "../../static/files/Vishal-Patel-Software-Developer-2021.pdf";
import { useDarkMode } from "../context/darkMode";

const Container = styled.header`
  background: ${({ theme }) => theme.color.white};
  border-bottom: ${({ theme }) => theme.color.grey} 1px solid;
  padding: 1.5rem;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    padding: 1rem;
  }
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.bp.lg};
`;

const FlexRow = styled.div`
  display: flex;
  flex: 1;

  ${({ left }) => left && "justify-content: flex-end;"};
  ${({ right }) => right && "justify-content: flex-start;"};

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PageLink = styled(Link)`
  color: ${({ theme }) => theme.color.greyDark};
  text-transform: uppercase;
  text-decoration: none;
  font-weight: lighter;
  margin: 0.5rem;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    background: ${({ theme }) => theme.color.primary};
    left: 0;
    right: 0;
    bottom: -0.25rem;
    transition: all 0.2s;
    height: 1px;
    width: 0;
  }

  &:hover,
  &.active {
    color: ${({ theme }) => theme.color.primary};
    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    font-size: 14px;
  }
`;

const ExternalLink = PageLink.withComponent("a");

const Logo = styled.img`
  margin: 0 0.5rem;
  height: 64px;
  width: 64px;
  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    height: 56px;
    width: 56px;
  }
`;

const HeaderLink = ({ label, link, externalLink }) =>
  externalLink ? (
    <ExternalLink href={externalLink} rel="noopener noreferrer" target="_blank">
      {label}
    </ExternalLink>
  ) : (
    <PageLink activeClassName="active" to={link ?? "/"}>
      {label}
    </PageLink>
  );

const Header = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <Container>
      <Navigation>
        <FlexRow left>
          <HeaderLink label="About" link="/about" />
          <HeaderLink label="Work" link="/work" />
        </FlexRow>
        <Link to="/" name="Home link">
          <Logo src={isDarkMode ? logoLight : logo} alt="VishPatel.com Logo" />
        </Link>
        <FlexRow right>
          <HeaderLink label="Tech Stack" link="/tech-stack" />
          <HeaderLink label="Resume" externalLink={resumePdf} />
        </FlexRow>
      </Navigation>
    </Container>
  );
};

export default Header;
