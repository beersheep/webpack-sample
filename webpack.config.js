const Path = require('path');

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
        use: ["style-loader", "css-loader"], 
        test: /\.css$/
      }
    ]
  }
}
