const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const moduleImporter = require("sass-module-importer");
const cleancss = require("gulp-clean-css");
const browserSync = require("browser-sync");
const {
	isDev,
	srcPath,
	saveToDist,
	saveToMem,
	prodOnly,
	devOnly,
	isServe } = require("./gulpEnv");

const cssBuild = () => {
	return gulp
		.src(srcPath("./scss/main.scss"))
		.pipe(devOnly(sourcemaps.init()))
		.pipe(devOnly(sourcemaps.identityMap()))
		.pipe(sass({
				outputStyle: "expanded",
				precision: 6,
				importer: moduleImporter()
			})
				.on("error", sass.logError))
		.pipe(postcss([
			autoprefixer({
				cascade: false
			})
		]))
		.pipe(prodOnly(cleancss({
			level: 1,
			compatibility: "*"
		})))
		.pipe(devOnly(sourcemaps.write()))
		.pipe(isServe ? saveToMem("./css") : saveToDist("./css"))
		.pipe(devOnly(browserSync.get("bs").stream()));
};

module.exports = cssBuild;