const Stack = require('./stack');
let expressionStack = new Stack();
expressionStack.clear();
test('stack is empty', () => {
    expect(expressionStack.size()).toStrictEqual(0);
});

test('Add elements to Stack', () => {
    expressionStack.push("sample");
    expect(expressionStack.peek()).toStrictEqual("sample");
});

test('Remove elements from stack', () => {
    let poppedElement = expressionStack.pop();
    expect(poppedElement).toStrictEqual("sample");
});


test('Fetch from empty stack', () => {
    let topElement = expressionStack.peek();
    let error = new Error("Empty Stack");
    expect(topElement).toStrictEqual(error);
});
