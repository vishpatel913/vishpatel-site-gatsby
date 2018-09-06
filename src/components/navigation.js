import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import colors from '../utils/colors'
import logo from '../../static/logo/logo.png'

const Container = styled.div`
  background: white;
  margin-bottom: 1.45rem;
  border-bottom: ${colors.grey} 1px solid;
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const FlexRowLeft = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const FlexRowRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 8px;

  &:hover {
    color: ${colors.primary};
  }
`

const Logo = styled.img`
  margin: 0 8px;
  height: 64px;
  width: 64px;
`

const Tab = ({ page }) => {
  let title = page.toUpperCase().split('-')
  if (title.length > 1) {
    title = title[0] + ' ' + title[1]
  }
  const link = '/' + page
  return (
    <MenuLink
      activeStyle={{
        color: `${colors.primaryLight}`,
      }}
      to={link}
    >
      {title}
    </MenuLink>
  )
}

const Header = () => (
  <Container>
    <Menu>
      <FlexRowLeft>
        <Tab page="about" />
        <Tab page="work" />
      </FlexRowLeft>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <FlexRowRight>
        <Tab page="tech-stack" />
        <Tab page="resume" />
      </FlexRowRight>
    </Menu>
  </Container>
)

export default Header
