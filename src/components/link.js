import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const ExternalLink = styled.a`
  text-decoration: "none";
  font-size: inherit;
  color: inherit;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    display: block;
    height: 0.5rem;
    position: absolute;
    top: 60%;
    z-index: -1;
    right: -0.15rem;
    left: -0.1rem;
    opacity: 0.3;
    background-color: ${({ theme }) => theme.color.primary};
    transform: translateY(0%) rotateZ(-2deg);
    transition: all 0.2s;
  }

  &:hover {
    color: ${({ theme }) => theme.color.background};
    &::after {
      opacity: 1;
      transform: translateY(-60%) rotateZ(-1deg) scaleY(3);
    }
  }
`;

const InternalLink = ExternalLink.withComponent(Link);

const StyledLink = ({
 href, title, children, external
}) => (external ? (
  <ExternalLink href={href} title={title}>
    {children}
  </ExternalLink>
  ) : (
    <InternalLink to={href}>{children}</InternalLink>
  ));

export default StyledLink;
