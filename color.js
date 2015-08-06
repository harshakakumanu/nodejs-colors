var colors = require('colors');
exports.log = function(string) {
	return colors.blue(string);
};

exports.info = function(string) {
	return colors.green(string)
};

exports.error = function(string) {
	return colors.red(string)
};