var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/BeforeAfter.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'BeforeAfter.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
              }, 
              {
                test: /\.(png|jpg|)$/,
                loader: 'url-loader?limit=200000'
              }
        ],
       
    }
}