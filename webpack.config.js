const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const configs = {
  devtool: "eval-source-map",
  context: path.join(__dirname, "src"), // `__dirname` is root of project and `src` is source
  entry: {
    js: ["babel-polyfill", "./index.js"]
  },
  mode: "development",
  output: {
    filename: "[name].[hash].js",
    path: path.join(__dirname, "dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  },
  plugins: [
    // Compile index.ejs into index.html, adding styles and scripts with chunkhash value
    new HtmlWebpackPlugin({
      template: "../public/index.html"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // Check for all js files
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["es2015", "react", "stage-0"] }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images"
            }
          }
        ]
      }
    ]
  }
};

module.exports = configs;
