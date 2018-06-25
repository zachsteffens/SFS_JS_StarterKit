import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

//set noInfo to true in your projects to declutter the command line output
export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index')
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        // Generate an external css file with a has in the filename
        new ExtractTextPlugin('[name].[contenthash].css'),
        // Hash the files using MD5 so that their names change when the content changes.
        // this creates the chunkhash variable referenced above.
        new WebpackMd5Hash(),
        // Use CommonsChunkPlugin to create a separate bundle of vendor libraries so that they're cached separately
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        //dynamically generate html doc
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true,
            // Properties you define here are available in index.html
            // using htmlWebpackPlugin.options.varName
            someVariable: 'someVariableValue'
        }),

        //eliminate duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),

        //minify js
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [ 'babel' ]
            },
            {
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract('css?sourceMap')
            }
        ]
    }
};
