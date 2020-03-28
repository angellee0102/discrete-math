const path = require('path');
// node_modules/.bin/webpack-dev-server --mode development --hot --inline --progress
module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ],
    },
    output: {
      filename: 'bundle.js',
      sourceMapFilename: '[file].map',
      path: path.resolve(__dirname, 'dist'),
      publicPath:'/'
    },
    // devServer: {
    //     contentBase: './dist',
    //     compress: true,
    //     port: 9000
    //   }
}