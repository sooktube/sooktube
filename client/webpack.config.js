const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
require("babel-polyfill");

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.jsx'],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: [/node_modules/]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.css$/,
                use: [
                    {
                    loader: MiniCssExtractPlugin.loader,
                },
               "css-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            },
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader',
                    'stylelint-custom-processor-loader',
                ],
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: `components/[name].css`
        }),
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        port: 9000
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
};