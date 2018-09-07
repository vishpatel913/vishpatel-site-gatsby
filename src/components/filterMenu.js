import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import colors from '../utils/colors'
import { capitalizeString } from '../utils/helpers'

const MenuContainer = styled.div`
  display: inline-flex;
  height: auto;
  margin: 8px;
  margin-bottom: 1.5rem;
  background: white;
  border: solid 1px ${colors.grey};
  border-radius: 4px;
  @media (max-width: 768px) {
    margin: 1rem 1rem 0;
  }
`

const MenuItem = styled(Link)`
  padding: 12px 1rem;
  font-size: 12px;
  font-weight: lighter;
  color: grey;
  border-right: solid 1px ${colors.grey};
  &:last-child {
    border: none;
  }
  &:hover {
    background: ${colors.background};
    color: ${colors.primaryLight};
  }
`

const Tab = ({ category }) => {
  let link = '/work/' + category
  if (category == 'all') {
    link = '/work'
  }
  return (
    <MenuItem
      activeStyle={{
        color: `${colors.primaryLight}`,
      }}
      to={link}
    >
      {capitalizeString(category)}
    </MenuItem>
  )
}

const FilterMenu = props => {
  return (
    <MenuContainer>
      <Tab category="all" />
      <Tab category="design" />
      <Tab category="development" />
      <Tab category="photography" />
    </MenuContainer>
  )
}

export default FilterMenu
