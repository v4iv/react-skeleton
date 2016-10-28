/**
 * Created by Vaibhav on 10/29/2016.
 */
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: 'public',
        filename: 'assets/js/bundle.min.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}