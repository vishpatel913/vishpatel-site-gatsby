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

const FooterContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 1200px;
  padding: 0.5rem 2rem 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`

const Layout = ({ children, data, location }) => (
  <SiteContainer>
    <SiteHead page={location.pathname} />
    <Navigation />
    <BodyContainer>{children()}</BodyContainer>
    <FooterContainer>
      <a href="https://www.contentful.com/" rel="nofollow" target="_blank">
        <img
          src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
          style={{ maxWidth: '100px', width: '100%' }}
          alt="Powered by Contentful"
        />
      </a>
    </FooterContainer>
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
