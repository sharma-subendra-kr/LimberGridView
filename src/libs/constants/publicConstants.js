const constants = {
	MOVE_GUIDE_RADIUS: 10,
	RESIZE_SQUARE_GUIDE_LENGTH: 10,
	RESIZE_SQUARE_BORDER_GUIDE_WIDTH: 3,
	AUTO_SCROLL_DISTANCE: 50,
	AUTO_SCROLL_POINT: 50,
	MOVE_OR_RESIZE_HEIGHT_INCREMENTS: 50,

	MOUSE_DOWN_TIME: 500,
	TOUCH_HOLD_TIME: 300,
	DEMO_WAIT_TIME: 500,
	WINDOW_RESIZE_WAIT_TIME: 1000,
	MARGIN: 5,

	MOBILE_ASPECT_RATIO: 16 / 9,

	ADD_OR_CUTSPACE_TOGGLE: "ADD",
};

const setPublicConstantByName = function(name, value) {
	if (constants[name]) {
		constants[name] = value;
	}
};

const getPublicConstantByName = function(name) {
	return constants[name];
};

export default constants;
