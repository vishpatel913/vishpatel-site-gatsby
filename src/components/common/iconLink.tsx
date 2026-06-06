import React from "react";
import styled from "styled-components";
import Icon from "./icon";

const StyledLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border: solid ${({ theme }) => theme.color.grey} 1px;
  font-size: 12px;
  font-weight: 200;
  border-radius: 4px;
  color: ${({ theme }) => theme.color.greyDark};

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    border-color: ${({ theme }) => theme.color.primary};
  }
`;

type Props = { href: string; icon?: string };

const IconLink = ({ href, icon, children }: React.PropsWithChildren<Props>) => {
  return (
    <StyledLink href={href} rel="noopener noreferrer" target="_blank">
      {icon ? <Icon name={icon} /> : null}
      {children}
    </StyledLink>
  );
};

export default IconLink;
