// 在类型注释中使用 import 动态导入类型,同样也可以实现载入类型，而且相比于在代码中通过 import 语句导入类型更为方便，也更为合理。
/** @type {import('webpack').Configuration} */
const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.md$/,
        // 直接使用相对路径
        use: [
          'html-loader',
          './markdown-loader'
        ]
      },
      {
        test: /\.css$/, // 根据打包过程中所遇到文件路径匹配是否使用这个 loader
        use: [
          'style-loader',
          'css-loader'
        ]// 指定具体的 loader, 注意先后顺序, 最后一个最先执行, 从后往前依次执行
      }
    ]
  }
}
module.exports = config