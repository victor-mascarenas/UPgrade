const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    entry: {
        index: './src/js/index.ts',
        newUser: './src/js/newUser.ts',
        posts: './src/js/posts.ts'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            chunks: ['index']
        }),
        new HtmlWebPackPlugin({
            template: './src/user_posts.html',
            filename: './user_posts.html',
            chunks: ['posts']
        }),
        new HtmlWebPackPlugin({
            template: './src/new_user.html',
            filename: './new_user.html',
            chunks: ['newUser']
        })/* ,
        new MiniCssExtractPlugin({
            filename: '[name].scss',
            chunkFilename: '[id].css'
        }) */
    ]
}