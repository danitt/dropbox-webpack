const path = require('path')

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
  }
}
