import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import colors from '../utils/colors'
import logo from '../../static/logo/logo.svg'

const Container = styled.div`
  background: white;
  border-bottom: ${colors.grey} 1px solid;
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.5rem 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const FlexRow = styled.div`
  display: flex;
  flex: 1;

  ${({ left }) =>
    left &&
    `
    justify-content: flex-end;
  `};
  ${({ right }) =>
    right &&
    `
    justify-content: flex-start;
  `};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const InternalLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: lighter;
  margin: 0.5rem;

  &:hover {
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const ExternalLink = styled.a`
  color: black;
  text-decoration: none;
  font-weight: lighter;
  margin: 0.5rem;

  &:hover {
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const Logo = styled.img`
  margin: 0 0.5rem;
  height: 64px;
  width: 64px;
  @media (max-width: 768px) {
    height: 56px;
    width: 56px;
  }
`

const Tab = ({ title, ext }) => {
  let label = title
    .toUpperCase()
    .split('-')
    .join(' ')
  if (ext) {
    return (
      <ExternalLink href={ext} target="_blank">
        {label}
      </ExternalLink>
    )
  } else {
    const link = '/' + title
    return (
      <InternalLink
        activeStyle={{
          color: `${colors.primaryLight}`,
        }}
        to={link}
      >
        {label}
      </InternalLink>
    )
  }
}

const Navigation = () => (
  <Container>
    <Menu>
      <FlexRow left>
        <Tab title="about" />
        <Tab title="work" />
      </FlexRow>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <FlexRow right>
        <Tab title="tech-stack" />
        <Tab title="resume" ext="http://www.vishpatel.com/cv-2018" />
      </FlexRow>
    </Menu>
  </Container>
)

export default Navigation
