/**
 * Created by nightost on 16/4/24.
 */
module.exports = {
    entry : {
        testNpmLoad : './static/javascript/testNpmLoad/testNpmLoad'
    },
    output : {
        filename : '[name]-debug.js',
        path : 'public/javascripts/'
        //todo test publicPath
        //publicPath : './'
    },
    module : {
        loaders : [{
            test : /\.js$/,
            loader: 'babel',
            exclude : /(node_modules|bower_components)/,
            query : {
                presets : ['es2015']
            }
        }]
    }
}