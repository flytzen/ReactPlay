var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './app.tsx',
  output: { path: __dirname, filename: 'bundle.js' },
   resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".jsx", ".js"]
    },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};