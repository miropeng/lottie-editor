const DIST_PATH = __dirname + '/../dist/';
const webpack = require("webpack");

let moduleConfig = {
	rules: [
		{
			exclude: /(hls\.js$|\.min\.js$)/,
			test: /\.js$/,
			loader: 'babel-loader',
			options: {
				presets: ['es2015']
			}
		}
	]
};

let ENTRY = {};

module.exports = function (data) {
	ENTRY['index'] = [__dirname + '/../src/index.js'];

	return {
		entry: ENTRY,
		output: {
			filename: '[name].js',
			path: DIST_PATH
		},
		module: moduleConfig,
		resolveLoader: {
			modules: ['node_modules', __dirname]
		},
		devtool: 'source-map',
		plugins: [

		]
	}
}
