import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

import colors from "../utils/colors";
import logo from "../../static/logo/logo.svg";
import cv2018 from "../../static/files/cv-2018.pdf";

const Container = styled.header`
  background: white;
  border-bottom: ${colors.grey} 1px solid;
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

const InternalLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: lighter;
  margin: 0.5rem;

  &:hover {
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ExternalLink = styled.a`
  color: black;
  text-decoration: none;
  font-weight: lighter;
  margin: 0.5rem;

  &:hover {
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Logo = styled.img`
  margin: 0 0.5rem;
  height: 64px;
  width: 64px;
  @media (max-width: 768px) {
    height: 56px;
    width: 56px;
  }
`;

const Tab = ({ title, ext }) => {
  const label = title
    .toUpperCase()
    .split("-")
    .join(" ");
  if (ext) {
    return (
      <ExternalLink href={ext} target="_blank">
        {label}
      </ExternalLink>
    );
  }
  const link = `/${title}`;
  return (
    <InternalLink
      activeStyle={{
        color: `${colors.primaryLight}`
      }}
      to={link}
    >
      {label}
    </InternalLink>
  );
};

Tab.propTypes = {
  title: PropTypes.string,
  ext: PropTypes.string
};

const Header = () => (
  <Container>
    <Navigation>
      <FlexRow left>
        <Tab title="about" />
        <Tab title="work" />
      </FlexRow>
      <Link to="/" name="Home link">
        <Logo src={logo} alt="VishPatel.com Logo" />
      </Link>
      <FlexRow right>
        <Tab title="tech-stack" />
        <Tab title="resume" ext={cv2018} />
      </FlexRow>
    </Navigation>
  </Container>
);

export default Header;
