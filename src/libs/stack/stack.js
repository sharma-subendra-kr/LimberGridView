/*
		
	LIFO(Last In First Out) Stack Data Structure


*/

const Stack = function() {
	this.length = 100;
	this.stack = new Array(this.length);
	this.ptr = -1;
};

Stack.prototype.constructor = Stack;

Stack.prototype.push = function(data) {
	if (data === null || data === undefined) {
		return false;
	}
	if (this.ptr < this.length - 1) {
		this.stack[++this.ptr] = data;
	} else {
		this.resize();
		this.stack[++this.ptr] = data;
	}
	return true;
};

Stack.prototype.pop = function() {
	if (this.ptr >= 0) {
		const top = this.stack[this.ptr];
		this.stack[this.ptr] = undefined;
		this.ptr--;
		return top;
	}
};

Stack.prototype.resize = function() {
	const oldlen = this.length;
	const oldStack = this.stack;
	this.length += 100;
	this.stack = new Array(this.length);

	for (let i = 0; i < oldlen; i++) {
		this.stack[i] = oldStack[i];
	}
};

Stack.prototype.getTop = function() {
	if (this.ptr >= 0) {
		return this.stack[this.ptr];
	}
	return null;
};

Stack.prototype.isEmpty = function() {
	if (this.ptr < 0) {
		return true;
	}
	return false;
};

Stack.prototype.getData = function() {
	const arr = new Array(this.ptr + 1);
	for (let i = 0; i <= this.ptr; i++) {
		arr[i] = this.stack[i];
	}
};

export default Stack;
