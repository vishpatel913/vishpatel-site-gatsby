import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/header'
import icon32 from '../../static/logo/favicon-32.png'

const BodyContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.5rem;
  padding-top: 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`

const Layout = ({ children, data }) => (
  <div>
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
    <Header />
    <BodyContainer>{children()}</BodyContainer>
  </div>
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
