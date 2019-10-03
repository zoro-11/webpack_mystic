const path = require('path')
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
                use: ['style-loader', 'css-loader', 'sass-loader'] /* 执行顺序是从下往上，从右往左 */
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') /* 如果不写，默认也是这个目录 __dirname 就是当前目录，然后跟 dist进行拼接*/
    }
}