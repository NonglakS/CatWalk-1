var path = require("path");
var SRC_DIR = path.join(__dirname, "/src");
var DIST_DIR = path.join(__dirname, "/public");
const webpack = require('webpack');

const Dotenv = require('dotenv-webpack');

const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
} );

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    // new webpack.DefinePlugin( {
    //   "process.env": dotenv.parsed
    // } ),
    new Dotenv()
  ],
};