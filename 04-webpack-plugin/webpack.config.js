// 在类型注释中使用 import 动态导入类型,同样也可以实现载入类型，而且相比于在代码中通过 import 语句导入类型更为方便，也更为合理。
/** @type {import('webpack').Configuration} */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');

const RemoveCommentsPlugin = require('./remove-comments-plugin')

const config = {
  mode: "none",
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') // CleanWebpackPlugin使用该插件需要配置该项, 否则不会清空dist目录
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Plugin Sample',
      template: './src/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: ['public']
    }),
    new RemoveCommentsPlugin()
  ]
}

module.exports = config