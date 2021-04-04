export const enhanceItem = (item) => {
	item.x1 = item.x;
	item.x2 = item.x + item.width;
	item.y1 = item.y;
	item.y2 = item.y + item.height;
};

export const enhancePositionData = (pd) => {
	const len = pd.length;
	for (let i = 0; i < len; i++) {
		enhanceItem(pd[i]);
	}
};
