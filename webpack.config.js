
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = (process.env.NODE_ENV === 'development')    

const config = {
    // 定义目标，是web平台
    target: 'web',
    // 入口文件,使用绝对路径
    entry: path.join(__dirname, 'src/index.js'),
    // 出口文件
    output:{
        filename: 'bundle.js', // 输出的文件名
        path: path.join(__dirname, 'dist') // 输出的文件保存路径
    },
    module:{
        rules: [
            {
                test:/\.vue$/, // 检查文件类型，是一个正则表达式
                loader: 'vue-loader'
            },
            {
                test:/\.jsx$/, 
                loader: 'babel-loader'
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            { 
                test:/\.styl/, // css 预处理器s
                use:[
                    'style-loader',
                    'css-loader',
                    { // 如果已经有source map了，就可以用之前生成的，就不用重新生成，提升效率
                        loader: 'postcss-loader',
                        options:{
                            sourceMap: true
                        }
                    },
                    'stylus-loader' // 依赖于stylus， 会自动生成source-map
                ]
            },
            {
                test: /\.(jpg|png|gif|jpeg|sng)$/,
                use:[
                    {
                        loader:'url-loader', // 依赖于file-loader
                        options:{
                            limit:1024,  // 如果图片小于1024，会把图片转换成base64代码写到代码中
                            name: '[name].[ext] '
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ]
}

// 根据不同的环境判断，开发环境和正式环境  （webpack-dev-server插件的使用）
if(isDev){
    // 使用es6和.vue 文件，浏览器是不能直接解析的，
    config.devtool = '#cheap-module-eval-source-map'
    config.devServer = {
        port: 8001,
        host: '0.0.0.0', // 可以通过本节内网和127.0.0.1同时访问
        overlay:{ // 当出现错误的时候，将错误显示在网页上
            errors: true
        },
        // 单页应用地址
        // historyFallback:{

        // },
        // hot: true, // 当页面代码改动时，只更新改动的代码，不是全部页面重新加载
        // open: true // 自动打开浏览器
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config