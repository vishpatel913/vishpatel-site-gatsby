const axios = require("axios");

exports.handler = (event, context, callback) => {
  const { name, email, message } = JSON.parse(event.body);

  // axios
  //   .get("https://api.github.com/repos/vishpatel913/vishpatel-site-gatsby/contents/_data/comments")
  //   .then((res) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ successMsg: `Thanks for commenting, ${name}` })
  });
  // })
  // .catch((err) => {
  //   callback(err);
  // });
};
