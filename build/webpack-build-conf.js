var webpack = require('webpack');
var merge = require('webpack-merge');
var baseConfig = require('./webpack-base-conf');
var path = require('path');
var extractTextWebapckPlugin = require('extract-text-webpack-plugin');

var buildConfig = merge(baseConfig,{
    output:{
        filename: '[name].esm.js',
        library: 'hlayout',
        libraryTarget: 'umd'
    },
    module:{
       loaders:[
           {
               test: /\.css$/,
               loader: extractTextWebapckPlugin.extract({
                   fallback: 'style-loader',
                   use: 'css-loader'
               })
           }
       ]
    },
    plugins:[
        new extractTextWebapckPlugin('[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vend',
            minChunks:function(module, count){
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                );
            }
        })
    ]
});

module.exports = buildConfig;
