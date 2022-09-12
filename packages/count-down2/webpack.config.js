const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3003,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    allowedHosts: 'all',
  },
  cache: true,
  output: {
    libraryTarget: 'umd',
    globalObject: 'window',
    publicPath: 'http://localhost:3003/',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
    ],
  },
  plugins: [
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    // new ModuleFederationPlugin({
    //   name: 'app2',
    //   filename: 'remoteEntry.js',
    //   exposes: {
    //     './App': './src/App',
    //   },
    //   shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    // }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
