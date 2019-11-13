const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: { 
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
	devServer: {
        contentBase: './public',
        hot: true
    },
    module: {
    	rules: [{
        	loader: 'babel-loader',
        	test: /\.js$/,
        	exclude: /node_modules/
    	}, {
    		test: /\.s?css$/,
			use:[
    			'style-loader',
    			'css-loader',
    			'sass-loader'
			]
    	}]
	},

}