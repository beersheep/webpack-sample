const Path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js', 

  output: {
    filename: 'bundle.js', 
    path: Path.resolve(__dirname, 'build')
  }, 
  
  module:  {
    rules: [
      {
        use: "babel-loader", 
        test: /\.js$/
      },

      {
        loader: ExtractTextPlugin.extract({
          loader: "css-loader", 
        }),
        test: /\.css$/
      }
    ]
  }, 

  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}
