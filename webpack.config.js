const ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
        template: `${__dirname}/index.html`,
        filename: "index.html",
        inject: "body"
    });
    module.exports = {
    entry: [
        `${__dirname}/index.js`,
        "whatwg-fetch",
        "babel-polyfill",
    ],
    output: {
        path: __dirname + "/build",
        filename: "build.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.jsx$/, 
                loader: "babel-loader", 
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {test: /\.(png|jpg)$/, loader: "file-loader"},
            {test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    {fallback: "style-loader", use: "css-loader"})
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin("build.css")
    ]
};