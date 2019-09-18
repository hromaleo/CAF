const { resolve } = require("path");

const configGlobal = {
	entry: [
			"@babel/polyfill", // First, we always include necessary polyfills for old browsers.
			"./src/js/index.js"
	],
	output: {
		filename: "app.js",
		path: resolve(__dirname, "./build/js")
	},
	//context: path.resolve(__dirname, "./src/js")
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/, // Be carefull! All imported packages in your app has to be in ES5, because they're not transpiled!
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
						plugins: ["@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties"]
					}
				}
			}
		]
	},
};

const configDevelopment = {
	mode: "development",
	devtool: 'eval-source-map',
};

const configProduction = {
	mode: "production",
	bail: true, // If an error is present in the bundle, return error code.
};

module.exports = { configGlobal, configDevelopment, configProduction };