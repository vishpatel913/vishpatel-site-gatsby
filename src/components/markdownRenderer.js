import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import ReactMarkdown from "react-markdown";

const ExternalLink = styled.a`
  text-decoration: "none";
  color: ${({ theme }) => theme.color.primary};

  &:hover {
    color: ${({ theme }) => theme.color.primaryLight};
  }
`;

const InternalLink = ExternalLink.withComponent(Link);

const LinkRenderer = ({ href, title, children }) => {
  const internal = href.indexOf("/") === 0;
  return internal ? (
    <InternalLink to={href}>{children}</InternalLink>
  ) : (
    <ExternalLink href={href} title={title}>
      {children}
    </ExternalLink>
  );
};

LinkRenderer.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string
};

const MarkdownRenderer = ({ source }) => (
  <ReactMarkdown
    source={source}
    renderers={{
      link: LinkRenderer
    }}
  />
);

MarkdownRenderer.propTypes = {
  source: PropTypes.string
};

export default MarkdownRenderer;
