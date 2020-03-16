require("dotenv").config({
  path: ".env"
});
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: "VishPatel.com"
  },
  pathPrefix: "/",
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/assets/typography.js"
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    "gatsby-image",
    // "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    // 'gatsby-paginate',
    "gatsby-transformer-remark"
  ],
  // for avoiding CORS while developing Netlify Functions locally
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": ""
        }
      })
    );
  }
};
