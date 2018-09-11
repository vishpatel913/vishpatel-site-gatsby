import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import colors from '../utils/colors'
import { capitalizeString } from '../utils/helpers'

const MenuContainer = styled.div`
  display: block;
  @media (max-width: 768px) {
    text-align: center;
  }
`

const MenuList = styled.ul`
  display: inline-flex;
  height: auto;
  margin: 0.5rem;
  margin-bottom: 1.5rem;
  background: white;
  border: solid 1px ${colors.grey};
  border-radius: 4px;

  @media (max-width: 768px) {
    margin: 1rem 1rem 0;
  }
`

const MenuItem = styled.li`
  display: inherit;
  margin: 0;
  border-right: solid 1px ${colors.grey};
  &:last-child {
    border: none;
  }
`

const MenuLink = styled(Link)`
  font-size: 12px;
  font-weight: lighter;
  padding: 0.5rem 1rem;
  color: grey;
  &:hover {
    color: ${colors.primary};
    background: ${colors.background};
  }

  @media (max-width: 400px) {
    padding: 0.5rem;
  }
`

const Tab = ({ category }) => {
  let link = '/work/' + category
  if (category == 'all') {
    link = '/work'
  }
  return (
    <MenuItem>
      <MenuLink
        exact={true}
        activeStyle={{
          color: colors.primaryLight,
          background: colors.background,
        }}
        to={link}
      >
        {capitalizeString(category)}
      </MenuLink>
    </MenuItem>
  )
}

const FilterMenu = props => {
  return (
    <MenuContainer>
      <MenuList>
        <Tab category="all" />
        <Tab category="design" />
        <Tab category="development" />
        <Tab category="photography" />
      </MenuList>
    </MenuContainer>
  )
}

export default FilterMenu
