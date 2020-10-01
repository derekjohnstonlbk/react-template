const webpack = require("webpack");

module.exports = {
	// The entry point.
	entry: "./src/index.js",
	
	// Configure the Babel loader.
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ["babel-loader"]		
		}]
	},
	
	resolve: {
		extensions: ["*", ".js", ".jsx"]
	},

	// The output file.
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "bundle.js"
	},

	// Plugins
	plugins: [new webpack.HotModuleReplacementPlugin],

	// The development server.
	devServer: {
		contentBase: "./dist",
		hot: true
	}
};
