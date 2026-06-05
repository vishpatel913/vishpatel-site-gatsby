import React from "react";
import { Link as GatsbyLink } from "gatsby";
import logo from "../../../static/images/logo.svg";
import logoLight from "../../../static/images/logo-light.svg";
import resumePdf from "../../../static/files/Vishal-Patel-Software-Developer-2024.pdf";
import { useDarkMode } from "../../context/darkMode";
import {
  Container,
  Navigation,
  ExternalLink,
  LinkContainer,
  Logo
} from "./Header.styles";

type HeaderLinkProps = {
  label: string;
  link?: string;
  externalLink?: string;
};

const PageLink = ExternalLink.withComponent(GatsbyLink as any);

const HeaderLink: React.FC<HeaderLinkProps> = ({
  label,
  link,
  externalLink
}) =>
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
        <LinkContainer $justify="end">
          <HeaderLink label="About" link="/about" />
          <HeaderLink label="Work" link="/work" />
        </LinkContainer>
        <GatsbyLink to="/" aria-label="Home">
          <Logo src={isDarkMode ? logoLight : logo} alt="VishPatel.com Logo" />
        </GatsbyLink>
        <LinkContainer $justify="start">
          <HeaderLink label="Tech Stack" link="/tech-stack" />
          <HeaderLink label="Resume" externalLink={resumePdf} />
        </LinkContainer>
      </Navigation>
    </Container>
  );
};

export default Header;
