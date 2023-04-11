//我们知道的就是path模块可以生成绝对路径
const path = require("path")

module.exports = {
    entry: "./src/index.js",  // 入口文件千万不能出错
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, './build')
    }
}