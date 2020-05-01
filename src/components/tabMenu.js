import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const MenuContainer = styled.div`
  display: block;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    text-align: center;
  }
`;

const MenuList = styled.ul`
  display: inline-flex;
  height: auto;
  margin: 0.5rem;
  margin-bottom: 1.5rem;
  background: ${({ theme }) => theme.color.white};
  border: solid 1px ${({ theme }) => theme.color.grey};
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    margin: 1rem 1rem 0;
  }
`;

const MenuItem = styled.li`
  display: inherit;
  margin: 0;
  border-right: solid 1px ${({ theme }) => theme.color.grey};
  &:last-child {
    border: none;
  }
`;

const MenuLink = styled(Link)`
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

const TabMenu = ({ links }) => (
  <MenuContainer>
    <MenuList>
      {links.map(item => (
        <MenuItem>
          <MenuLink activeClassName="active" to={item.url}>
            {item.title}
          </MenuLink>
        </MenuItem>
      ))}
    </MenuList>
  </MenuContainer>
);

export default TabMenu;
