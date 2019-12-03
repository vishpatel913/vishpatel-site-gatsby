import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inherit;
  cursor: pointer;
  color: ${({ theme }) => theme.color.greyDark};
  background: ${({ theme }) => theme.color.background};
  margin: 0;
  padding: 0.5rem 1rem;
  border: solid 1px;
  border-color: ${({ theme }) => theme.color.grey};
  border-radius: 4px;
  font-weight: lighter;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.primary};
    border-color: ${({ theme }) => theme.color.primaryDark};
  }
`;

const Button = props => <StyledButton {...props}>{props.children}</StyledButton>;

export default Button;
