const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './index.js',
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '.webpack.js', '.js' ]
  },
  node: {
    __dirname: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 'global.GENTLY': false })
  ]
}
