var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');

var config = require('./webpack-dev.conf');

var compile = webpack(config);
var server = new webpackDevServer(compile,{
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
});
server.listen(8080);
