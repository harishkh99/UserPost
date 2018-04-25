var Path = require('path');
var entryPoints = ['babel-polyfill', './src/index.js'];
module.exports = {
    entry : entryPoints,
    output:{
        path: Path.resolve('build/js'),
        filename: 'bundle.js',
        publicPath : '/assets/js/'
    },
    devtool: 'inline-source-map',
    devServer:{
        contentBase : 'public',
        inline : true,
        hot : true,
        port: 3001
    },

    module:{
         loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
		 query: {
            presets: ['react', 'es2015','stage-0'],
         }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ]
    }

}