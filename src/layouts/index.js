import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import SiteHead from '../components/siteHead'
import Header from '../components/header'
import Footer from '../components/footer'
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
  padding: 1.5rem 2rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`

const Layout = ({ children, data, location }) => (
  <SiteContainer>
    <SiteHead page={location.pathname} />
    <Header />
    <BodyContainer>{children()}</BodyContainer>
    <Footer />
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
