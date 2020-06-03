'use strict'
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

console.log(devMode ? '开发环境' : '生产环境');
module.exports = {
    entry: ['babel-polyfill', './src/index.tsx'],
    output: {
        filename: 'js/[name].bundle.[hash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: "/"
    },
    module: {
        rules: [{
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    cacheDirectory: true,
                }
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name][contenthash].[ext]',
                        publicPath: '/images',
                        outputPath: 'images',
                    },
                }, ],
            },
            {
                test: /\.(eot|svg|ttf|otf|woff|woff2|mp4|3gp)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        // 设置生成字体文件的路径名字信息 [path]相对context，outputPath输出的路径，publicPath相应引用的主路径
                        name: '[name][contenthash].[ext]',
                        publicPath: '/media/',
                        outputPath: 'media',
                        // 使用文件的相对路径，这里先不用这种方式
                        // useRelativePath: isProduction
                    }
                }],
            }
        ]
    },
    optimization: {
        /**
         * 提取webpack运行时的代码
         */
        runtimeChunk: {
            name: 'manifest',
        },
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {

                /**
                 * 核心库单独打包
                 */
                lib_core: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-dom-router|runtime)[\\/]/,
                    name: 'lib/lib-core',
                    priority: 100,
                    minSize: 0,
                    chunks: 'all',
                    reuseExistingChunk: true,
                    minChunks: 1,
                },
                /**
                 * 其他一步加载的代码
                 */
                async_commons: {
                    name: 'lib/async',
                    minChunks: 2,
                    chunks: 'async',
                    priority: 90,
                },

                /**
                 * 引用超过两次的同步代码分割
                 */
                commons: {
                    chunks: 'all',
                    minChunks: 2,
                    name: 'lib/common',
                    priority: 80,
                },
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? 'css/[name].css' : 'css/[name][hash].css',
            chunkFilename: devMode ? '[id].css' : 'css/[name][id].[hash].css',
        }),
    ],
    resolve: {
        alias: {
            components: path.resolve(__dirname, '../src/components/'),
            public: path.resolve(__dirname, '../src/public/')
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    }
};