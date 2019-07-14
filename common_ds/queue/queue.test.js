const Queue = require('./queue');
let queue = new Queue();

test('queue is empty', () => {
    expect(queue.isEmpty()).toStrictEqual(true);
});

test('Add elements to Queue', () => {
    queue.enqueue("sample");
    expect(queue.front()).toStrictEqual("sample");
});

test('Remove elements from queue', () => {
    let frontElement = queue.dequeue();
    expect(frontElement).toStrictEqual("sample");
});

test('Remove elements from empty queue', () => {
    let frontElement = queue.dequeue();
    let error = new Error("Empty Queue");
    expect(frontElement).toStrictEqual(error);
});

test('Get front element from empty queue', () => {
    let frontElement = queue.front();
    let error = new Error("Empty Queue");
    expect(frontElement).toStrictEqual(error);
});
