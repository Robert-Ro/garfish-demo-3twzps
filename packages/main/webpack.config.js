const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const path = require('path');

const { getPort, getPublicPath } = require('../../util')
const appName = 'main'

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: getPort(appName),
    historyApiFallback: true,
  },
  output: {
    publicPath: getPublicPath(appName),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        loader:'css-loader'
      }
    ],
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: "app1",
    //   remotes: {
    //     app2: "app2@[app2Url]/remoteEntry.js",
    //   },
    //   shared: {react: {singleton: true}, "react-dom": {singleton: true}},
    // }),
    // new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
