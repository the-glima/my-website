var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  stats: { colors: true },
  devtool: 'source-map',
  devServer: {
    port: process.env.PORT || 8080,
    contentBase: './',
    historyApiFallback: true
  }
};
