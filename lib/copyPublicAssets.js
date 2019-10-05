const gulp = require("gulp");
const {
	publicPath,
	saveToDist } = require("./gulpEnv");

// Copies files from public folder to build folder
const copyPublicAssets = (assetsPath = publicPath("**/*")) => () => {
	return gulp
		.src(assetsPath)
		.pipe(saveToDist());
};

module.exports = copyPublicAssets;