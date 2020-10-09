const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpackCommon = require('../../webpack.common');

const port = 8081;

module.exports = {
  ...webpackCommon,
  devServer: {
    ...webpackCommon.devServer,
    port,
  },
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "acessoriosApp",
      library: { type: "var", name: "acessoriosApp" },
      filename: "remote.js",
      exposes: {
        "./ListaAcessorios": "./src/app",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
