import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inherit;
  cursor: pointer;
  margin: 0;
  border: solid 1px;
  border-radius: 4px;
  transition: all 0.3s;
  font-weight: lighter;
  outline-color: ${({ theme }) => theme.color.secondary};

  color: ${({ theme, outline }) => (outline ? theme.color.greyDark : theme.color.greyDark)};
  background: ${({ theme, outline }) => (outline ? "transparent" : theme.color.background)};
  border-color: ${({ theme, outline }) => (outline ? "transparent" : theme.color.grey)};

  &:hover {
    color: ${({ theme, outline }) => (outline ? theme.color.primary : theme.color.white)};
    background: ${({ theme, outline }) => (outline ? "transparent" : theme.color.primary)};
    border-color: ${({ theme, outline }) => (outline ? theme.color.primary : theme.color.primaryDark)};
  }

  ${({ small }) => (small ? "padding: 0.25rem 0.5rem; font-size: 16px;" : "padding: 0.5rem 1rem;")}
`;

const Button = props => (
  <StyledButton small={props.small} outline={props.outline} {...props}>
    {props.children}
  </StyledButton>
);

export default Button;
