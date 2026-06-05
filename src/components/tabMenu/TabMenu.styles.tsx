import styled from "styled-components";
import { Link } from "gatsby";

export const MenuContainer = styled.div`
  display: block;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    text-align: center;
  }
`;

export const MenuList = styled.ul`
  display: inline-flex;
  height: auto;
  margin: 0;
  background: ${({ theme }) => theme.color.white};
  border: solid 1px ${({ theme }) => theme.color.grey};
  border-radius: 4px;
`;

export const MenuItem = styled.li`
  display: inherit;
  margin: 0;
  border-right: solid 1px ${({ theme }) => theme.color.grey};
  &:last-child {
    border: none;
  }
`;

export const MenuLink = styled(Link)`
  font-size: 12px;
  font-weight: lighter;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.color.greyDark};

  &:hover,
  &.active {
    color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.background};
  }

  @media (max-width: 400px) {
    padding: 0.5rem;
  }
`;
