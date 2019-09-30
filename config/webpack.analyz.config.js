const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const prodConfig = require('./webpack.prod.config');
const merge = require('webpack-merge');

module.exports = merge(prodConfig, {
    plugins: [
        new BundleAnalyzerPlugin(
            {
               analyzerMode: 'server',
               analyzerHost: '127.0.0.1',
               analyzerPort: 8889,
               reportFilename: 'report.html',
               defaultSizes: 'parsed',
               openAnalyzer: true,
               generateStatsFile: false,
               statsFilename: 'stats.json',
               statsOptions: null,
               logLevel: 'info'
            }
        ),
    ]
});
