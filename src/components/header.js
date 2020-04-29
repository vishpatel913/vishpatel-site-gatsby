import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import logo from "../../static/images/logo.svg";
import logoLight from "../../static/images/logo-light.svg";
import DarkModeContext from "../context/darkModeContext";

const Container = styled.header`
  background: ${({ theme }) => theme.color.white};
  border-bottom: ${({ theme }) => theme.color.grey} 1px solid;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.5rem 2rem;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    padding: 1rem;
  }
`;

const FlexRow = styled.div`
  display: flex;
  flex: 1;

  ${({ left }) => left
    && `
    justify-content: flex-end;
  `};
  ${({ right }) => right
    && `
    justify-content: flex-start;
  `};

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeaderLink = styled(Link)`
  color: ${({ theme }) => theme.color.greyDark};
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

const Logo = styled.img`
  margin: 0 0.5rem;
  height: 64px;
  width: 64px;
  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    height: 56px;
    width: 56px;
  }
`;

const Tab = ({ id }) => {
  const label = id.toUpperCase().split("-").join(" ");
  const link = `/${id}`;
  return (
    <HeaderLink activeClassName="active" to={link}>
      {label}
    </HeaderLink>
  );
};

const Header = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
  <Container>
    <Navigation>
      <FlexRow left>
        <Tab id="about" />
        <Tab id="work" />
      </FlexRow>
      <Link to="/" name="Home link">
        <Logo src={isDarkMode ? logoLight : logo} alt="VishPatel.com Logo" />
      </Link>
      <FlexRow right>
        <Tab id="tech-stack" />
        <Tab id="resume" />
      </FlexRow>
    </Navigation>
  </Container>
  );
};

export default Header;
