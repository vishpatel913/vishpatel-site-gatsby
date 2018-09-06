module.exports = {
  siteMetadata: {
    title: 'VishPatel.com',
  },
  pathPrefix: `/`,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qcrphhesuv4n`,
        accessToken: `53275fa1db2534ec36b9dd363f767359773ce40ef008ef519b32e5d29574b83e`,
      },
    },
  ],
}
