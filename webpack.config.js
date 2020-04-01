const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

const paths = {
  root: '.',
  src: 'src',
  dist: 'dist',
  assets: 'src/assets',
  scss: 'src/assets/scss',
  images: 'src/assets/images',
  components: 'src/components'
};

const entry = [
  `${path.join(__dirname, paths.components)}/home/home.ts`, 
  `${path.join(__dirname, paths.components)}/gists/gists.ts`, 
  `${path.join(__dirname, paths.src)}/styles.scss`
]

const config = {
  context: path.join(__dirname, './'),
  entry: {
    main: [...entry]
  },
  output: {
    filename: 'javascript.min.js',
    path: path.join(__dirname, paths.dist)
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
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename: 'stylesheets.min.css'}),
    new CopyWebpackPlugin([
      {
        context: 'src/',
        from: path.join(__dirname, `${paths.images}/*.{jpg,jpeg,png,gif,svg}`),
        to: path.join(__dirname, paths.dist),
        toType: 'dir',
        force: true
      }
    ]),
    new ImageMinPlugin({test: /\.(jpg|jpeg|png|gif|svg)$/i}),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, `${paths.root}/index.html`)
    }),
    new HtmlWebpackPartialsPlugin([
      {path: `${path.join(__dirname, paths.components)}/intro/intro.html`},
      {path: `${path.join(__dirname, paths.components)}/social-links/social-links.html`},
      {path: `${path.join(__dirname, paths.components)}/gists/gists.html`},
      {path: `${path.join(__dirname, paths.components)}/footer/footer.html`}
    ])
  ],
  optimization: {
    minimizer: [new TerserPlugin({parallel: true}), new OptimizeCssAssetsPlugin({})]
  }
};

module.exports = config;
