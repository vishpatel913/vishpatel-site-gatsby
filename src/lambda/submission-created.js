
exports.handler = (event, context, callback) => {
  const { name, email, message, slug } = JSON.parse(event.body);

  alert(`Thank you ${name} for commenting on ${slug}`);
  console.log("LOG", `Thank you ${name} for commenting on ${slug}`);

  // axios
  //   .get("https://api.github.com/repos/vishpatel913/vishpatel-site-gatsby/contents/_data/comments")
  //   .then((res) => {
  // callback(null, {
  //   statusCode: 200,
  //   body: JSON.stringify({ successMsg: `Thanks for commenting, ${name}` })
  // });
  // })
  // .catch((err) => {
  //   callback(err);
  // });
};

// TODO: change file to 'submission-created.js'
