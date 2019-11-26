const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const imagePostTemplate = path.resolve("src/templates/image-post.js");
    const categoryGridTemplate = path.resolve("src/templates/category-grid.js");
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
          reject(result.errors);
        }

        // Create image post pages.
        result.data.allContentfulImage.edges.forEach(edge => {
          createPage({
            path: edge.node.slug, // required
            component: imagePostTemplate,
            context: {
              slug: edge.node.slug
            }
          });
        });

        const categories = ["design", "development", "photography"];

        categories.forEach(category => {
          createPage({
            path: `work/${category}`, // required
            component: categoryGridTemplate,
            context: {
              slug: category
            }
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty"
    }
  });
};
