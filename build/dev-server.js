var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');

var config;
var env = process.env.NODE_ENV;
if(env == 'dev'){
    config = require('./webpack-dev.conf');
    var compile = webpack(config);
    var server = new webpackDevServer(compile,{
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    });
    server.listen(8080);
} else {
    config = require('./webpack-build-conf');
    var compile = webpack(config);
    compile.run(function(){
        console.log('finished');
    })
}
