const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';

module.exports = {
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname,'src','index.jsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: './dist',
        port: 3000,
        open:true,
        hot: IS_DEV,
    },
    plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname,"index.html"),
    })],
    module: {
        rules: [
          {
            test: /\.[tj]sx?$/,
            use: ['ts-loader'],
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js','.jsx','.json'],
      },
};