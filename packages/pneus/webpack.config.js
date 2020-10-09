const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpackCommon = require('../../webpack.common');

const port = 8082;

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
      name: "pneusApp",
      library: { type: "var", name: "pneusApp" },
      filename: "remote.js",
      exposes: {
        "./ListaPneus": "./src/app",
      },
      remotes: {
        pneusApp: "pneusApp",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
