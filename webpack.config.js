const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: ['@babel/polyfill', path.join(__dirname, 'client/src/index.js')],
    entry: ['@babel/polyfill', path.join(__dirname, 'client/src/index.js')],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    // devServer: {
    //     port: 5000,
    // },
    module: {
        rules: [
            // {
            //     test: /\.(js|jsx)$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: [
            //                 '@babel/preset-react',
            //                 '@babel/preset-env', {
            //                     useBuiltIns: "usage",
            //                     corejs: 3,
            //                 }],
            //             plugins: [['@babel/plugin-proposal-class-properties']],
            //         },
            //     },
            // },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: [['@babel/plugin-proposal-class-properties']],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /.(jpe$g|png|webp|gif)$/,
                use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
            },
            {
                test: /.(eot|svg|ttf|woff|woff2)$/,
                use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
            },
        ],
    },
    plugins: [
        // ["@babel/transform-runtime", {
        //     corejs: 3,
        // }],
        new HtmlWebpackPlugin({
            title: 'Segno',
            template: './client/src/index.html',
        }),
    ],
    mode: 'development',
};