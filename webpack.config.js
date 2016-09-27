// TODO: create a css file in production: http://jamesknelson.com/writing-happy-stylesheets-with-webpack/
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './app.tsx',
  output: { path: __dirname, filename: 'bundle.js' },
   resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".jsx", ".js"]
    },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['es2015', 'react'] }
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
       // Load SCSS
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")  },
    ]
  },
  externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
  plugins: [
    new ExtractTextPlugin("style.css", {allChunks: false})
  ]
};