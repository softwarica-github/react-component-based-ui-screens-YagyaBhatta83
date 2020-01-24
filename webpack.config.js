const path = require('path')

module.exports = {
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 3000,
    hot: true,
    publicPath: 'http://localhost:3000/dist/'
  },
  devtool: 'inline-source-map'
}
