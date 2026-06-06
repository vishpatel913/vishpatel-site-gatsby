import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Icon from "./icon";

const ExternalLink = styled.a`
  text-decoration: "none";
  font-size: inherit;
  color: inherit;
  position: relative;
  z-index: 1;
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

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
    background-color: ${({ theme }) => theme.color.secondary};
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

type Props = {
  href: string;
  icon?: string;
  title?: string;
  external?: boolean;
};

const StyledLink: React.FC<PropsWithChildren<Props>> = ({
  href,
  title,
  icon,
  external,
  children
}) => {
  const content = (
    <StyledContent>
      {icon ? <Icon name={icon} /> : null}
      {children}
    </StyledContent>
  );
  return external ? (
    <ExternalLink href={href} title={title}>
      {content}
    </ExternalLink>
  ) : (
    <InternalLink to={href}>{content}</InternalLink>
  );
};

export default StyledLink;
