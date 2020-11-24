// 在类型注释中使用 import 动态导入类型,同样也可以实现载入类型，而且相比于在代码中通过 import 语句导入类型更为方便，也更为合理。
/** @type {import('webpack').Configuration} */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const allModes = [
  'eval',
  'eval-cheap-source-map',
  'eval-cheap-module-source-map',
  'eval-source-map',
  'eval-nosources-source-map',
  'eval-nosources-cheap-source-map',
  'eval-nosources-cheap-module-source-map',
  'cheap-source-map',
  'cheap-module-source-map',
  'inline-cheap-source-map',
  'inline-cheap-module-source-map',
  'inline-source-map',
  'source-map'
]

const configs = allModes.map(item => ({
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
    // ...
    // 详细配置文档：https://webpack.js.org/configuration/dev-server/
  },
  devtool: item,
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: `js/${item}.js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `${item}.html`
    })
  ]
}))

module.exports = configs;