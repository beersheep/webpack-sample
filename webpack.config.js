const Path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js', 

  output: {
    filename: 'bundle.js', 
    path: Path.resolve(__dirname, 'build'),
    publicPath: 'build/'
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
      }, 

      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          { 
            loader: 'url-loader',
            options: { limit: 40000 }
          },

          {
            loader: 'image-webpack-loader',
            options: { byPassOnDebug: true }
          }
        ]
      }
    ]
  }, 

  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}
