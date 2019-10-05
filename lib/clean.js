const del = require("del");
const {
	distPath,
	isServe } = require("./gulpEnv");

const clean = (cb) => {
	if (isServe)
		cb();

	del(distPath(), { force: true })
		.then(() => { cb(); });
};

module.exports = clean;