var path = require('path');
function resolve(dir){
    return path.join(__dirname,'..',dir);
}
var baseConfig = {
    entry:{
        main: './src/main.js'
    },
    output:{
        path: resolve('dist'),
        filename: '[name].js'
    },
    resolve:{
        extensions:['.js','.json','.vue'],
        modules:[resolve('src'),resolve('node_modules')],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}
module.exports = baseConfig;