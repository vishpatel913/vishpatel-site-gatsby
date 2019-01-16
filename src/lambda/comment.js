const contentful = require("contentful-management");

require("dotenv").config({
  path: ".env"
});

exports.handler = (event, context, callback) => {
  const {
    name, email, message, slug
  } = JSON.parse(event.body);

  const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
  });

  client
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then(space => space.createEntry("postComment", {
      fields: {
        postSlug: {
          "en-US": slug
        },
        name: { "en-US": name },
        email: { "en-US": email },
        message: {
          "en-US": message
        },
        timestamp: { "en-US": Math.round(new Date().getTime() / 1000) }
      }
    }))
    .then(entry => console.log(entry))
    .catch(console.error);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ successMsg: "Comment saved as draft" })
  });
};

// TODO: change file to 'submission-created.js'
