const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') /* htmlWebpackPlugin 会在打包结束后，自动生成一个html文件，兵吧打包生成的js自动引入到这个html文件中 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin') /* 3.0以上 cleanWebpackPlugin需要进行结构使用，这是个大坑 */
    /* plugin  可以在webpack运行到某个时刻的时候，帮你做一些事情*/

module.exports = {
    mode: 'production' /* webpack默认会配置production */ ,
    entry: {
        "main": './src/index.js'
    },
    module: {
        rules: [{
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    //placeholder 占位符
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/',
                        limit: 2048
                    }
                }
            },
            {
                test: /\.vue$/,
                use: { loader: 'vue-loader' }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2, //可以保证在scss文件中引入其他scss，也可以保证正确使用
                            modules: true
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ] /* 执行顺序是从下往上，从右往左 */
            }
        ]
    },

    output: {
        publicPath: 'http://cdn.com.cn',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist') /* 如果不写，默认也是这个目录 __dirname 就是当前目录，然后跟 dist进行拼接*/
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}