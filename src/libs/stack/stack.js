/*
		
	LIFO(Last In First Out) Stack Data Structure


*/

const Stact = function() {
	this.length = 100;
	this.stack = new Array(this.length);
	this.ptr = -1;
};

Stack.prototype.constructor = Stack;

Stack.prototype.push = function(data) {
	if (this.ptr < this.length - 1) {
		this.stack[++this.ptr] = data;
	} else {
		this.resize();
		this.stack[++this.ptr] = data;
	}
};

Stack.prototype.pop = function() {
	this.stack[this.ptr] = null;
	this.ptr--;
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

export default Stack;
