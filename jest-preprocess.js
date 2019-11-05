const babelOptions = {
  presets: ["babel-preset-gatsby"],
  plugins: ["styled-components"]
};

module.exports = require("babel-jest").createTransformer(babelOptions);
