const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.exec\.js$/, use: ["script-loader"] },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: ["url-loader?limit=10000&mimetype=application/font-woff"]
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: ["file-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            { test: /\.(png|svg|jpg|gif|jpeg)$/, use: ["file-loader"] },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                            removeComments: true,
                            collapseWhitespace: true
                        }
                    }
                ]
            }
        ],
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HTMLWebPackPlugin({
            title: 'Building Code Consultants',
            favicon: './img/bcc_vector_xQ3_icon.ico',
            meta: require('./json/meta.json')
        }),
        new ManifestPlugin(),
        new UglifyJsPlugin({
            sourceMap: true
        })
    ]
};