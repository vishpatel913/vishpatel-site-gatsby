// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`
// });

// const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: "VishPatel.com"
  },
  pathPrefix: "/",
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/styles/typography.js"
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }
  ]
  // for avoiding CORS while developing Netlify Functions locally
  // developMiddleware: app => {
  //   app.use(
  //     "/.netlify/functions/",
  //     createProxyMiddleware({
  //       target: "http://localhost:9000",
  //       pathRewrite: {
  //         "/.netlify/functions/": ""
  //       }
  //     })
  //   );
  // }
};
