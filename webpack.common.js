const mode = process.env.NODE_ENV || "production";

module.exports = {
  mode,
  entry: "./src/index",
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    historyApiFallback: {
      index: "index.html",
    },
  },
  optimization: {
    minimize: mode === "production",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [/node_modules/],
      },
    ],
  },
};
