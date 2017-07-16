const webpack = require('webpack');
const path = require('path');


module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},

	module: {
		rules: [
		     {
		       test: /\.jsx?$/,
		       exclude: /(node_modules|bower_components)/,
		       loader : 'babel-loader',
		       options: {
		         presets: ['react', 'es2015', 'stage-0'],
		         plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
		       }
		     }
		   ]
		 }
	}
