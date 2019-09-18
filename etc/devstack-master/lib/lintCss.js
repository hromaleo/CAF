const gulp = require("gulp");
const stylelint = require("gulp-stylelint");
const { srcPath } = require("./gulpEnv");

function lintCss() {
	return gulp
		.src(srcPath("./scss/**/*.scss"))
		.pipe(stylelint({
			reporters: [
				{
					formatter: "verbose",
					console: true
				},
				{
					formatter: "string",
					save: "lintcss.txt"
				}
			],
			syntax: "scss"
		}))
}

module.exports = lintCss;