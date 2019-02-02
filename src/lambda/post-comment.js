const contentful = require("contentful-management");

const activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "development";
console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
  path: ".env"
});
const querystring = require("querystring");

exports.handler = (event, context, callback) => {
  const formBody = querystring.parse(event.body);
  const { slug } = event.queryStringParameters;
  const { name, email, message } = formBody;

  const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
  });

  if (activeEnv === "production") {
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
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      successMsg: `Comment submitted for ${slug} pending review`
    })
  });
};
