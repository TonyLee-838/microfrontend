const { merge } = require("webpack-merge");
//merge function allows us to merge different webpack config files into one.

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
//It detects the HTML file and eject <script> tags automatically.

const commonConfig = require("./webpack.common");
const packageJSON = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: packageJSON.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

// The second argument(devConfig) is going to overwrite the first argument(commonConfig)
// When there is a conflict.
module.exports = merge(commonConfig, devConfig);
