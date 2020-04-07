const constants = {
	WIDTH: 0,
	HEIGHT: 0,
	PADDING_LEFT: 0,
	PADDING_RIGHT: 0,
	PADDING_TOP: 0,
	PADDING_BOTTOM: 0,
};

const setPrivateConstantByName = function(name, value) {
	if (constants[name]) {
		constants[name] = value;
	}
};

const getPrivateConstantByName = function(name) {
	return constants[name];
};

const setPaddingLeft = function(val) {
	constants.PADDING_LEFT = val;
};

const setPaddingRight = function(val) {
	constants.PADDING_RIGHT = val;
};

const setPaddingTop = function(val) {
	constants.PADDING_TOP = val;
};

const setPaddingBottom = function(val) {
	constants.PADDING_BOTTOM = val;
};

export default constants;
export { setPaddingLeft, setPaddingRight, setPaddingTop, setPaddingBottom };
