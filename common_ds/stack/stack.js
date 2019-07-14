var Stack = function () {
	this.stackMap = new WeakMap();
	this.key = {};
	this.stackMap.set(this.key, []);
}
Stack.prototype.push = function (value) {
	let stack = this.stackMap.get(this.key);
	stack.push(value);
}
Stack.prototype.pop = function () {
	let stack = this.stackMap.get(this.key);
	return stack.pop();
}
Stack.prototype.peek = function () {
	if (this.size() === 0)
        return new Error("Empty Stack");
	var stack = this.stackMap.get(this.key);
	return stack[stack.length - 1];
};
Stack.prototype.clear = function () {
	this.stackMap.set(this.key, []);
};
Stack.prototype.size = function () {
	return this.stackMap.get(this.key).length;
};

module.exports = Stack;
