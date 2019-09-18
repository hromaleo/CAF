const fs = require("fs-extra");
const path = require("path");
const glob = require("fast-glob");
const { srcPath } = require("./gulpEnv");

function getHtmlData() {
	const jsonFiles = glob.sync(srcPath("html/*.json"));
	const data = {};

	jsonFiles.forEach((jsonFile) => {
		const fileContent = fs.readFileSync(jsonFile);
		data[path.basename(jsonFile, ".json")] = JSON.parse(fileContent);
	});

	return data;
};

module.exports = getHtmlData;