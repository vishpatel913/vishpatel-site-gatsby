import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import SiteHead from '../components/siteHead'
import Navigation from '../components/navigation'
import colors from '../utils/colors'
import icon32 from '../../static/logo/favicon-32.png'
// import './index.css'

const SiteContainer = styled.div`
  background: ${colors.background};
`

const BodyContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
  padding: 1.5rem 2rem 2rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`

const Layout = ({ children, data, location }) => (
  <SiteContainer>
    <SiteHead page={location.pathname} />
    <Navigation />
    <BodyContainer>{children()}</BodyContainer>
  </SiteContainer>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
