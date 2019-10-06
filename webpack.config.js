const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MODULE_PATH = {
    PHASER: path.join(__dirname, 'node_modules', 'phaser')
}

module.exports = {
    mode: 'development',
    entry: {
        app: [path.resolve(__dirname, './src/main.ts')]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            inject: 'head'
        }),
        new CopyWebpackPlugin([
            { from:'./src/assets', to: 'assets' } 
        ]),
        new MiniCssExtractPlugin({
            filename: "app.bundle.css"
        })
    ],
    module: {
       rules: [
            {
                test: /\.ts?$/, 
                loader: "ts-loader", 
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
                include: path.resolve(__dirname, 'src')
            },
            { 
                test: /\.json$/, 
                include: path.resolve(__dirname, 'src'),
                loader: 'json'
            }
       ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
          'phaser': MODULE_PATH.PHASER
        }
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
