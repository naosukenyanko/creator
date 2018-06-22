
const webpack = require('webpack');
const path = require('path');


const config = {
	entry: {
		creator: path.join(__dirname, "src/browser.js"),
	},
	output: {
		path: path.join(__dirname, '/htdocs/scripts'),
		filename: '[name].js'
	},
	module: {
		rules : [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ["env"]
				}
			},
			{
				test: /\.(jpe?g|png|gif|svg|ico)(\?.+)?$/,
				loader: 'url-loader',
			},
			{
				test: /\.txt$/,
				loader: 'raw-loader',
			},
		],
	},
	resolve: {
		extensions: [ '.js']
	},
	devServer: {
		contentBase: path.join(__dirname, 'htdocs'),
		port: 8080,
	},
}

module.exports = config;
