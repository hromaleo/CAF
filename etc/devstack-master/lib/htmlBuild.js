const gulp = require("gulp");
const getHtmlData = require("./getHtmlData");
const nunjucks = require("gulp-nunjucks");
const rename = require("gulp-rename");
const browserSync = require("browser-sync");
const {
	srcPath,
	saveToDist,
	saveToMem,
	isServe,
	devOnly } = require("./gulpEnv");
let htmlData = null; // Data from JSON files in HTML folder.

const build = () => {
	if (htmlData === null)
		refreshData();

	return gulp
		.src(srcPath("html/*.nunjucks"))
		.pipe(nunjucks.compile(htmlData))
		.pipe(rename({
			extname: ".html"
		}))
		.pipe(isServe ? saveToMem() : saveToDist())
		.pipe(devOnly(browserSync.get("bs").stream()));
};

const refreshData = (cb) => {
	htmlData = getHtmlData();

	if (typeof cb === "function")
		cb();
};

module.exports = {
	build,
	refreshData
};
//{
//	ext: ".html"
//}