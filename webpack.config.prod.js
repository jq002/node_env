const webpack = require('webpack')
const merge = require('webpack-merge')

const config = require("./webpack.config.js")

module.exports = merge(config, {
    plugins: [
        new webpack.DefinePlugin({
            // 定义 NODE_ENV 环境变量为 production，以去除源码中只有开发时才需要的部分
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env.TEST_ENV': JSON.stringify('production'),
        }),
        //webpack4.x版本，webpack.optimize.UglifyJsPlugin已移除，使用报错

        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         // 在UglifyJs删除没有用到的代码时不输出警告
        //         warnings: false,
        //         // 删除所有的 `console` 语句，可以兼容ie浏览器
        //         drop_console: process.env.NODE_ENV === 'production',
        //       }
        // })
    ]
})
console.log("process.env.NODE_ENV 的值是(webpack.config.prod.js)：" + process.env.NODE_ENV)