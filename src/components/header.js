import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { ThemeContext } from "styled-components";
import { Link } from "gatsby";
import { connect } from "react-redux";

import logo from "../../static/images/logo.svg";
import logoLight from "../../static/images/logo-light.svg";
import cv2018 from "../../static/files/cv-2018.pdf";

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

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ExternalLink = styled.a`
  color: ${({ theme }) => theme.color.navLink};
  text-decoration: none;
  font-weight: lighter;
  margin: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const InternalLink = ExternalLink.withComponent(Link);

const Logo = styled.img`
  margin: 0 0.5rem;
  height: 64px;
  width: 64px;
  @media (max-width: 768px) {
    height: 56px;
    width: 56px;
  }
`;

const Tab = ({ id, ext }) => {
  const theme = useContext(ThemeContext);
  const label = id
    .toUpperCase()
    .split("-")
    .join(" ");
  if (ext) {
    return (
      <ExternalLink href={ext} rel="noopener noreferrer" target="_blank">
        {label}
      </ExternalLink>
    );
  }
  const link = `/${id}`;
  return (
    <InternalLink
      activeStyle={{
        color: `${theme.color.primaryDark}`
      }}
      to={link}
    >
      {label}
    </InternalLink>
  );
};

Tab.propTypes = {
  id: PropTypes.string,
  ext: PropTypes.string
};

const Header = ({ isDarkMode }) => (
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
        <Tab id="resume" ext={cv2018} />
      </FlexRow>
    </Navigation>
  </Container>
);

Header.propTypes = {
  isDarkMode: PropTypes.bool
};

const mapStateToProps = ({ isDarkMode }) => ({ isDarkMode });

export default connect(mapStateToProps, null)(Header);
