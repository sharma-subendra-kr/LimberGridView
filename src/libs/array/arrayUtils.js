export const shuffle = (arr) => {
	let temp,
		len = arr.length,
		j;
	for (let i = 0; i < len; i++) {
		j = Math.floor(Math.random() * (i + 1));
		temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr;
};
