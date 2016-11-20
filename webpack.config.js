// var webpack = require('webpack');
// var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: {
//       main: './src/main.jsx'
//   },
//   output: {
//     path: path.join(__dirname, 'build'),
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [{
//       test: /\.js[x]?$/,
//       exclude: /node_modules/,
//       loader: 'babel-loader'
//     }, {
//       test: /.\css$/,
//       loader: ['style-loader', 'css-loader']
//     }]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'My Test',
//       filename: 'index.html'
//     })
//   ]
// };


// try to use ES6
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: 'My Test',
  filename: 'index.html' 
});

module.exports = {
  entry: {
      app: './src/index.js',
  },
  output: {
    path: `${__dirname}/build`,
    // publicPath: "/statics/",
    filename: '[name].js'
  },
  module: {
    // 在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）相關檔案（排除了 npm 安裝的套件位置 node_modules）轉譯成瀏覽器可以閱讀的 JavaScript。
    // preset 則是使用的 babel 轉譯規則，這邊使用 react、es2015。
    // 若是已經單獨使用 .babelrc 作為 presets 設定的話，則可以省略 query
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // query: {
        //   presets: ['es2015', 'react'],
        // }
      },
      {
        test: /\.css$/,
        // loader: ['style-loader', 'css-loader']
        loader: 'style!css'
      },
      {
        test: /\.(png|jpg|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
        // 當圖片大小小於 8k 時使用 base64 URL, 其餘使用直接連接到圖片的 URL
      },
      //fonts loader
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};