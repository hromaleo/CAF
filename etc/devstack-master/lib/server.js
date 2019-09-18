const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const browserSync = require("browser-sync").create("bs");
const memory = require("./destToMemory");
const {
	publicPath,
	isProd,
	webpackConfig } = require("./gulpEnv");

const server = () => {
	const webpackCompiler = webpack(webpackConfig);

	let config = {
		server: {
			baseDir: [
				publicPath(), // Serving static public assets directly from source.
			]
		},
		middleware: [
			memory.middleware,
			{
				route: "/js",
				handle: webpackDevMiddleware(webpackCompiler) // Serving builded javascript directly from webpack.
			},
		],
	};

	browserSync.init(config);
};

module.exports = server;