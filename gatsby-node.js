/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const imagePostTemplate = path.resolve(`src/templates/image-post.js`)
    // Query for markdown nodes to use in creating pages.
    // all entries based on content type: which here, is image
    resolve(
      graphql(`
        {
          allContentfulImage(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create image post pages.
        result.data.allContentfulImage.edges.forEach(edge => {
          createPage({
            path: edge.node.slug, // required
            component: imagePostTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })

        return
      })
    )
  })
}
