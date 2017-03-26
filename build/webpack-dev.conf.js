var webpack = require('webpack');
var merge = require('webpack-merge');
var config = require('./webpack-base-conf');
var htmlWebpackPlugin = require('html-webpack-plugin');
var devConfig = merge(config,{
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
});
module.exports = devConfig;