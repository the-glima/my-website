const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;
const getHTMLPluginConfig = require('./webpack/html-plugin.webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = {
  src: 'src',
  dist: 'dist',
  assets: 'src/assets',
  scss: 'src/assets/scss',
  images: 'src/assets/images',
  components: 'src/components'
};

const config = {
  entry: {
    home: [
      path.resolve(__dirname + `/${paths.components}/home/home.ts`),
      path.resolve(__dirname + `/${paths.src}/main.scss`)
    ]
  },
  output: {
    filename: 'main.min.js',
    path: path.resolve(__dirname, paths.dist)
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    port: 3000,
    open: true,
    progress: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{loader: 'ts-loader'}],
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {loader: 'html-loader'}
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      verbose: true
    }),
    new MiniCssExtractPlugin({
      filename: 'main.min.css'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, `${paths.images}/me.jpg`),
        to: path.resolve(__dirname, 'dist'),
        toType: 'dir'
      }
    ]),
    new ImageMinPlugin({test: /\.(jpg|jpeg|png|gif|svg)$/i})
  ].concat(
    getHTMLPluginConfig({
      favicon: `${paths.images}/favicon.png`
    })
  ),
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  }
};

module.exports = config;
