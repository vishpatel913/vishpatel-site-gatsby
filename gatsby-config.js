require("dotenv").config({
  path: ".env"
});
const proxy = require("http-proxy-middleware");

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
        pathToConfigModule: "src/utils/typography.js"
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
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    // 'gatsby-paginate',
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/_data/comments`,
        name: "comments"
      }
    }
  ],
  // for avoiding CORS while developing Netlify Functions locally
  developMiddleware: (app) => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": ""
        }
      })
    );
  }
};
