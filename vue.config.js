// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    // 设置webpack配置，vue-cli会将配置merge进去webpack.config.js中去
    publicPath: './',
    productionSourceMap: false,
    configureWebpack: config => {
    //     if (process.env.NODE_ENV === 'production') {
    //         return {
    //             devtool: 'none'
    //             // plugins: [
    //             //     new UglifyJsPlugin({
    //             //         uglifyOptions: {
    //             //             compress: {
    //             //                 drop_console: true, // 移除 console. 函数，使用 pure_funcs 设定移除特定的 console
    //             //                 pure_funcs: ['console.log'] // 移除console
    //             //             }
    //             //         },
    //             //         parallel: true // 使用多进程并行运行来提高构建速度
    //             //     })
    //             // ]
    //         }
    //     } else {
    //     // 为开发环境修改端口
    //         return {
    //             devServer: {
    //                 port: 8051
    //             }
    //         }
    //     }
    }
}
