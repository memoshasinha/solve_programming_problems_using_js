var Stack = (function () {
	var wmkey = {};
	var items = new WeakMap();

	items.set(wmkey, []);

	function Stack() {

	}

	Stack.prototype.push = function (element) {
		var stack = items.get(wmkey);
		stack.push(element);
	};
	Stack.prototype.pop = function () {
		var stack = items.get(wmkey);
		return stack.pop();
	};
	Stack.prototype.peek = function () {
		var stack = items.get(wmkey);
		return stack[stack.length - 1];
	};
	Stack.prototype.clear = function () {
		items.set(wmkey, []);
	};
	Stack.prototype.size = function () {
		return items.get(wmkey).length;
	};
	return Stack;
}());
module.exports = Stack;