const webpack = require("webpack");

module.exports = {
	// The entry point.
	entry: "./src/index.jsx",
	
	// Configure the Babel loader.
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ["babel-loader", "eslint-loader"]		
		},{
			test: /\.css$/i,
			exclude: /node_modules/,
			use: [
				"style-loader",
				{
					loader: 'css-loader',
					options: { modules: true, }
				},
			],
		},{
			test: /\.svg$/,
			use: ['@svgr/webpack']
		}],
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
