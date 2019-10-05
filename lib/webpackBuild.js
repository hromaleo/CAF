const { isProd, webpackConfig } = require("./gulpEnv");
const webpack = require("webpack");

const webpackBuild = () => {
	return new Promise(resolve => webpack(webpackConfig, (err, stats) => {
		if (err)
			console.log('Webpack', err);
		else if (isProd)
			console.log("\n" + stats.toString({ /* stats options */ }) + "\n");

		resolve();
	}));
};

module.exports = webpackBuild;