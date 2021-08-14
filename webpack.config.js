const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        vector: './example/vector.js',
        raster: './example/raster.js',
    },
    plugins: [
        new webpack.ProvidePlugin({
            Promise: 'es6-promise',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'example'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: 'inline-source-map',
    devServer: {
        watchContentBase: true,
        contentBase: './example',
    },
};
