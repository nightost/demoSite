/**
 * Created by nightost on 16/4/24.
 */
var webpack = require('webpack');
const path = require('path');
module.exports = {
    entry : {
        fakeSearch : './static/javascript/fakeSearch/fakeSearch',
        testRedux : './static/javascript/testRedux/store',
        testReact : './static/javascript/testReact/testReact'
    },
    output : {
        filename : '[name]-debug.js',
        path : path.resolve(__dirname, 'public/javascripts/')
    },
    module : {
        loaders : [{
            test : /\.js$/,
            loader: 'babel-loader',
            exclude : /(node_modules|bower_components)/,
            query : {
                presets : ['react', 'es2015']
            }
        }]
    },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         "react": "static/javascript/modules/react/react",
    //         "react-dom": "static/javascript/modules/react/react-dom",
    //     })
    // ],
    externals : {
        "react" : 'window.React',
        "react-dom" : 'window.ReactDOM'
    }
}