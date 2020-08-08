/*

LimberGridView, a powerful JavaScript Libary that gives you movable, resizable(any size) and auto-arranging grids.

Copyright © 2018-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of LimberGridView.

LimberGridView is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

LimberGridView is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with LimberGridView.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/

/*

	LIFO(Last In First Out) Stack Data Structure

*/

const Stack = function (options) {
	this.length = 100;
	this.stack = new Array(this.length);
	this.ptr = -1;

	if (options && options.data) {
		const data = options.data;
		const len = data.length;
		for (let i = 0; i < len; i++) {
			this.push(data[i]);
		}
	}
};

Stack.prototype.constructor = Stack;

Stack.prototype.push = function (data) {
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

Stack.prototype.pop = function () {
	if (this.ptr >= 0) {
		const top = this.stack[this.ptr];
		this.ptr--;
		return top;
	}
};

Stack.prototype.wipePop = function () {
	if (this.ptr >= 0) {
		const top = this.stack[this.ptr];
		this.stack[this.ptr] = undefined;
		this.ptr--;
		return top;
	}
};

Stack.prototype.resize = function () {
	const oldlen = this.length;
	const oldStack = this.stack;
	this.length += 100;
	this.stack = new Array(this.length);

	for (let i = 0; i < oldlen; i++) {
		this.stack[i] = oldStack[i];
	}
};

Stack.prototype.getTop = function () {
	if (this.ptr >= 0) {
		return this.stack[this.ptr];
	}
	return null;
};

Stack.prototype.isEmpty = function () {
	if (this.ptr < 0) {
		return true;
	}
	return false;
};

Stack.prototype.getData = function () {
	const arr = new Array(this.ptr + 1);
	for (let i = 0; i <= this.ptr; i++) {
		arr[i] = this.stack[i];
	}
	return arr;
};

Stack.prototype.getAllData = function () {
	const arr = new Array(this.length);
	for (let i = 0; i < this.length; i++) {
		arr[i] = this.stack[i];
	}
	return arr;
};

Stack.prototype.getSize = function () {
	return this.ptr + 1;
};

Stack.prototype.empty = function () {
	this.ptr = -1;
};

Stack.prototype.wipe = function () {
	this.length = 100;
	this.stack = new Array(this.length);
	this.ptr = -1;
};

export default Stack;
