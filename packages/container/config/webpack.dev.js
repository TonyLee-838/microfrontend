const { merge } = require("webpack-merge");
//merge function allows us to merge different webpack config files into one.

const HtmlWebpackPlugin = require("html-webpack-plugin");
//It detects the HTML file and eject <script> tags automatically.

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const packageJSON = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        //[used in import statement]:[remote name used in other config files]@http://localhost:[port]/remoteEntry.js
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
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
