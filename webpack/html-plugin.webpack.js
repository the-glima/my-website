const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const indexHTML = {
  filename: 'index.html',
  template: '../index.html',
  chunks: ['index'],
  inject: 'body'
};

const viewsHTML = [indexHTML];

const getHTMLPluginConfig = config =>
  viewsHTML.reduce((acc, curr) => {
    return [
      ...acc,
      new HtmlWebpackPlugin({
        ...(config && {...config}),
        inject: curr.inject || 'head',
        filename: curr.filename,
        chunks: curr.chunks,
        template: path.resolve(__dirname, curr.template)
      })
    ];
  }, []);

module.exports = getHTMLPluginConfig;
