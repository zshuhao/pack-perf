const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {

    // 设置webpack配置，vue-cli会将配置merge进去webpack.config.js中去
    publicPath: './',
    // productionSourceMap: false,

    configureWebpack: config => {
        config.performance = {
            hints: false
        }
        // config.devtool = 'none'
        console.log('111', process.env.NODE_ENV)
        if (process.env.NODE_ENV === 'prod') {
            return {
                devtool: 'none',
                plugins: [
                    new UglifyJsPlugin({
                        uglifyOptions: {
                            // mangle: false,
                            output: {
                                // beautify: true // 美化代码
                                comments: false // 去掉注释
                            },
                            compress: {
                                drop_console: true, // 移除 console. 函数，使用 pure_funcs 设定移除特定的 console
                                pure_funcs: ['console.log'] // 移除console
                            }
                        },
                        // sourceMap: false,
                        parallel: true // 使用多进程并行运行来提高构建速度
                    }),
                    new HtmlWebpackPlugin({
                        minify: {
                            removeComments: true,
                            collapseWhitespace: true,
                            removeAttributeQuotes: true,
                            collapseBooleanAttributes: true,
                            removeScriptTypeAttributes: true
                        },
                        templateParameters: {
                            BASE_URL: './'
                        },
                        template: './public/index.html' // 指定要打包的html路径和文件名
                        // filename: './index.html' // 指定输出路径和文件名
                    })
                ]
            }
        } else {
            // 为开发环境修改端口
            // return {
            //     devServer: {
            //         port: 8051
            //     }
            // }
        }
    }
}
