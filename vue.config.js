const development = process.env.NODE_ENV == 'development' ? true : false;
const path = require('path');

module.exports = {
    publicPath: './',
    productionSourceMap: development,
    css: {
        sourceMap: development
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname, './src/assets/style/variable.scss'),
                path.resolve(__dirname, './src/assets/style/mixins.scss')
            ]
        }
    }
}