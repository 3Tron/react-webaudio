var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'public');

var config = {
	entry : [ APP_DIR + '/rui.jsx' ],
	output : { path : BUILD_DIR, filename : '/rui.js' },
	plugins : [ new webpack.DefinePlugin({
		'process.env' : {
			'NODE_ENV' : JSON.stringify('production')
		}
	}), new webpack.optimize.UglifyJsPlugin({
		compress : {
			warnings : true
		}
	}) ],
	module : {
		loaders : [ {
			test : /\.jsx?/,
			include : APP_DIR,
			loader : 'babel'
		} ],
	}
};

module.exports = config;
