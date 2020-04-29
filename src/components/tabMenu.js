import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { capitalizeString } from "../utils/helpers";

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

const Tab = ({ category }) => {
  let link = `/work/${category}`;
  if (category === "all") {
    link = "/work";
  }

  return (
    <MenuItem>
      <MenuLink activeClassName="active" to={link}>
        {capitalizeString(category)}
      </MenuLink>
    </MenuItem>
  );
};

const TabMenu = () => (
  <MenuContainer>
    <MenuList>
      <Tab category="all" />
      <Tab category="design" />
      <Tab category="development" />
      <Tab category="photography" />
    </MenuList>
  </MenuContainer>
);

export default TabMenu;
