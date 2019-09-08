const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const configs = {
  devtool: 'eval-source-map',
  context: path.join(__dirname, 'src'),
  entry: {
    js: ['babel-polyfill', 'webpack-dev-server/client?http://0.0.0.0:3000', './index.js']
  },
  mode: 'development',
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  plugins: [
    // Compile index.ejs into index.html, adding styles and scripts with chunkhash value
    new HtmlWebpackPlugin({ template: '../public/index.html' }),
    new CleanWebpackPlugin(['dist']),
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
            loader: 'babel-loader',
            options: { presets: ['es2015', 'react', 'stage-0'] }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images'
            }
          }
        ]
      }
    ]
  }
}

module.exports = configs
