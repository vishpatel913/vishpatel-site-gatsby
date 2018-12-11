import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import SiteHead from '../components/siteHead'
import Header from '../components/header'
import Footer from '../components/footer'
import colors from '../utils/colors'

const SiteContainer = styled.div`
  background: ${colors.background};
`

const BodyContainer = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
  padding: 1.5rem 2rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`

const Layout = ({ children, page }) => (
  <SiteContainer>
    <SiteHead page={page} />
    <Header />
    <BodyContainer>{children}</BodyContainer>
    <Footer />
  </SiteContainer>
)

Layout.propTypes = {
  children: PropTypes.func,
  page: PropTypes.string,
}

export default Layout
