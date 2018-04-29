const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.(png|jpg|gif|svg)$/, use: [{ loader: 'file-loader', options: {} }] },
            { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        removeComments: false,
                        collapseWhitespace: false
                    }
                }]
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                loader: 'url-loader',
            }
        ],
    },

    plugins: [
        new HTMLWebPackPlugin({
            //template: './index.html',
            title: 'BCC',
            favicon: './img/bcc_vector_xQ3_icon.ico'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};