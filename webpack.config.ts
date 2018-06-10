/* tslint:disable:object-literal-sort-keys */
import * as path from "path";
import * as slsw from "serverless-webpack";

const entries = {};

Object.keys(slsw.lib.entries).forEach(
  (key: string) => (entries[key] = ["./source-map-install.ts", slsw.lib.entries[key]]),
);
module.exports = {
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: entries,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
  target: "node",
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
};
