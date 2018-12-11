import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

import colors from "../utils/colors";
import logo from "../../static/logo/logo-light.svg";

const Container = styled.div`
  background: #333333;
  padding: 1.5rem 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto 0.5rem;
  max-width: 1200px;
`;

const Navigation = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 50%;
    flex-wrap: wrap;
  }
`;

const InternalLink = styled(Link)`
  font-size: 12px;
  color: ${colors.grey};
  text-decoration: none;
  margin: 0.25rem 0.5rem;

  &:hover {
    color: ${colors.primaryLight};
  }
`;

const ExternalLink = styled.a`
  font-size: 12px;
  color: ${colors.grey};
  text-decoration: none;
  margin: 0.25rem 0.5rem;

  &:hover {
    color: ${colors.primaryLight};
  }
`;

const Logo = styled.img`
  margin: 0 0.5rem;
  height: 64px;
  width: 64px;

  @media (max-width: 768px) {
    height: 44px;
    width: 44px;
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
    <FlexContainer>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Navigation>
        <Tab title="about" />
        <Tab title="work" />
        <Tab title="tech-stack" />
        <Tab title="resume" ext="http://www.vishpatel.com/cv-2018" />
      </Navigation>
    </FlexContainer>
  </Container>
);

export default Header;
