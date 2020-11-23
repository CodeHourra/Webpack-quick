// 在类型注释中使用 import 动态导入类型,同样也可以实现载入类型，而且相比于在代码中通过 import 语句导入类型更为方便，也更为合理。
/** @type {import('webpack').Configuration} */
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  mode: "none"
}
module.exports = config