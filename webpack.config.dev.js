const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.(png|jpg|gif)$/, use: [{ loader: 'url-loader', options: { limit: 8192 } }] },
            { test: /\.(png|jpg|gif)$/, use: [{ loader: 'file-loader', options: {} }] },
            { test: /\.(html)$/, use: { loader: 'html-loader', options: { attrs: [':data-src'] } } },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ],
    },

    plugins: [
        new HTMLWebPackPlugin({
            template: './index.html',
            favicon: './img/bcc_vector_xQ3_icon.ico'
        })
    ]
};