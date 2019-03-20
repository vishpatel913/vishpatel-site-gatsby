exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      successMsg: "Test response from lambda function"
    })
  });
};
