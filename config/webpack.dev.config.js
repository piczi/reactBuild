const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const address = require('ip').address();

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [

        ]
    },
    devServer: {
        contentBase: './dist',
        port: 3000,
        inline: true, //实时刷新
        hot: true,
        host: address,
        open: true, // 自动打开浏览器
        historyApiFallback:{
            index:'dist/index.html'
        },
    }
});