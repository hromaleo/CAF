const gulp             = require("gulp");
const gulpEnv          = require("./lib/gulpEnv");
const clean            = require("./lib/clean");
const sassBuild        = require("./lib/sassBuild");
const webpackBuild     = require("./lib/webpackBuild");
const htmlBuild        = require("./lib/htmlBuild");
const copyPublicAssets = require("./lib/copyPublicAssets")();
const lintCss          = require("./lib/lintCss");
const watch            = require("./lib/watch");
const server           = require("./lib/server");

console.log(gulpEnv.isServe ? "Build into memory." : "Build to filesystem.");

exports.sassBuild        = sassBuild;
exports.webpackBuild     = webpackBuild;
exports.htmlBuild        = htmlBuild.build;
exports.copyPublicAssets = copyPublicAssets;
exports.watch            = watch;
exports.lintCss          = lintCss;

exports.serve = gulp.series(gulp.parallel(sassBuild, htmlBuild.build), watch, server);
exports.build = gulp.series(clean, gulp.parallel(sassBuild, webpackBuild, copyPublicAssets, htmlBuild.build));