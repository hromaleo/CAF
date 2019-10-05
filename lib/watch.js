const gulp = require("gulp");
const {
	srcPath,
	publicPath,
	isServe  } = require("./gulpEnv");
const cssBuild = require("./sassBuild");
const webpackBuild = require("./webpackBuild");
const html = require("./htmlBuild");
const copyPublicAssets = require("./copyPublicAssets");

const watch = (cb) => {
	const copyPublicAsset = (path) => copyPublicAssets(path);

	gulp.watch(srcPath("./scss/**/*.scss"), cssBuild); // Watches all SCSS changes and rebuilds CSS.
	gulp.watch(srcPath("./html/**/*.nunjucks"), html.build); // Watches screens changes and rebuilds changed screens.
	gulp.watch(srcPath("./html/**/*.json"), gulp.series(html.refreshData, html.build)); // Watches screens changes and rebuilds changed screens.

	if (!isServe) { // Serving directly or by middleware, so no need to watch.
		gulp.watch(srcPath("./js/**/*.js"), webpackBuild); // Watches all JS changes and rebuilds JS.
		gulp.watch(publicPath("**/*"), copyPublicAsset); // Watches public assets and copy the changed one.
	}

	cb();
};

module.exports = watch;