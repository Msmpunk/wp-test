const path = require('path');

console.log('-----------------')
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')

module.exports = {
  mode:'development',
  entry: { 
    main: path.resolve(__dirname, 'index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};