const constants = {
	WIDTH: 0,
	HEIGHT: 0,
};

const setPrivateConstantByName = function(name, value) {
	if (constants[name]) {
		constants[name] = value;
	}
};

const getPrivateConstantByName = function(name) {
	return constants[name];
};

export default constants;
