// TODO: create a css file in production: http://jamesknelson.com/writing-happy-stylesheets-with-webpack/
var path = require('path');
var webpack = require('webpack');
 
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
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.css$/, loader: "style!css" },
    ]
  },
  externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};