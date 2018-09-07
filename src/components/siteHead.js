import React from 'react'
import Helmet from 'react-helmet'

import GatsbyConfig from '../../gatsby-config'
import { capitalizeString } from '../utils/helpers'
import icon32 from '../../static/logo/favicon-32.png'

const SiteHead = ({ title, description, keywords, page }) => {
  let siteTitle = GatsbyConfig.siteMetadata.title
  if (title) {
    siteTitle += ' | ' + title
  } else if (page && page != '/') {
    siteTitle += ' | ' + capitalizeString(page.split('/')[1])
  }
  const siteDescription = description
    ? description
    : 'Front-end Development and Design Porfolio'
  const siteKeywords = keywords
    ? keywords
    : 'front-end, development, design, portfolio, javascript, photoshop, illustrator, react, gatsby, graphql'

  return (
    <Helmet
      title={siteTitle}
      meta={[
        {
          name: 'description',
          content: siteDescription,
        },
        {
          name: 'keywords',
          content: siteKeywords,
        },
        {
          name: 'author',
          content: 'Vish Patel',
        },
      ]}
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${icon32}` }]}
    />
  )
}

export default SiteHead
