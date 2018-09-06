import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Navigation from '../components/navigation'
import icon32 from '../../static/logo/favicon-32.png'

const SiteContainer = styled.div`
  background: #eeeeee;
`

const BodyContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.5rem 2rem 2rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`

const Layout = ({ children, data }) => (
  <SiteContainer>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'Front-end Development and Design Porfolio',
        },
        {
          name: 'keywords',
          content:
            'front-end, development, design, portfolio, javascript, photoshop, illustrator, react, gatsby, graphql',
        },
        {
          name: 'author',
          content: 'Vish Patel',
        },
      ]}
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${icon32}` }]}
    />
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
