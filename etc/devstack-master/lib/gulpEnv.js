const path = require("path");
const gulp = require("gulp");
const through2 = require("through2");
const memory = require("./destToMemory");
const { configGlobal, configDevelopment, configProduction } = require("../webpack.config");

const folders = {     // All folders are relative to gulpfile.
	src: "./src",       // Source files folder.
	dist: "./build",    // Distribution folder for production.
	public: "./public", // Folder with public assets.
};

// Returns true, if current build is for production, otherwise returns false (current build is for development).
const isProd = process.env.NODE_ENV == "staging" || process.env.NODE_ENV == "production" || process.argv.includes("--production");
const isDev = !isProd;

// Returns true, if current build is for serving content for browser.
const isServe = process.argv.includes("serve") || process.argv.includes("--serve");

// Converts relative path in source files folder to absolute path, OS independent.
const srcPath = (relativePath = "./") => path.resolve(folders.src, relativePath);

// Converts relative path in source files folder to absolute path, OS independent.
const publicPath = (relativePath = "./") => path.resolve(folders.public, relativePath);

// Converts relative path in distribution folder to absolute path, OS independent.
const distPath = (relativePath = "./") => path.resolve(folders.dist, relativePath);

// Prepares gulp.dest() function with absolute path pointing to distribution folder.
const saveToDist = relativePath => gulp.dest(distPath(relativePath));

// Prepares function to save gulp result into memory.
const saveToMem = (relativePath = "./") => memory.dest(relativePath);

// If current build is for development, pipe stream falls through, otherwise originally piped function is runned.
const prodOnly = fnToRun => isProd ? fnToRun : through2.obj();

// If current build is for production, pipe stream falls through, otherwise originally piped function is runned.
const devOnly = fnToRun => !isProd ? fnToRun : through2.obj();

// Webpack configuration
const webpackConfig = isProd ? Object.assign(configGlobal, configProduction) : Object.assign(configGlobal, configDevelopment);

module.exports = {
	isProd,
	isDev,
	isServe,
	srcPath,
	publicPath,
	distPath,
	saveToDist,
	saveToMem,
	prodOnly,
	devOnly,
	webpackConfig
};