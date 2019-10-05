const GulpMem = require("gulp-mem");

const memory = new GulpMem();
memory.serveBasePath = '/';
memory.enableLog = false;

module.exports = memory;