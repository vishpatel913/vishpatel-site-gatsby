const axios = require("axios");

exports.handler = (event, context, callback) => {
  axios
    .get("https://api.github.com/repos/vishpatel913/vishpatel-site-gatsby/contents/_data/comments")
    .then((res) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res.data)
      });
    })
    .catch((err) => {
      callback(err);
    });
};
