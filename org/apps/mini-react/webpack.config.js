const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { NxReactWebpackPlugin } = require('@nx/react/webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/mini-react'),
    publicPath: 'auto',
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: '/index.html',
      disableDotRule: true,
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    },
  },
  plugins: [
    new NxAppWebpackPlugin({
      tsConfig: './tsconfig.app.json',
      compiler: 'babel',
      main: './src/main.tsx',
      index: './src/index.html',
      baseHref: '/',
      assets: ['./src/favicon.ico', './src/assets'],
      styles: ['./src/styles.css'],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
    new NxReactWebpackPlugin({
      // Uncomment this line if you don't want to use SVGR
      // See: https://react-svgr.com/
      // svgr: false
    }),
    new ModuleFederationPlugin({
      name: 'mini_react',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/app/app', // Expose component ở đây
      },
    }),
  ],
};
