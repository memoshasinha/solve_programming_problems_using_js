var Queue = function () {
    this.queueMap = new WeakMap();
    this.key = {};
    this.queueMap.set(this.key, []);
}

Queue.prototype.enqueue = function (element) {
    let queue = this.queueMap.get(this.key);
    queue.push(element);
}

Queue.prototype.dequeue = function () {
    if (this.isEmpty())
        return new Error("Empty Queue");
    let queue = this.queueMap.get(this.key);
    return queue.shift();
}

Queue.prototype.front = function () {
    // returns the Front element of  
    // the queue without removing it. 
    if (this.isEmpty())
        return new Error("Empty Queue");
    return this.queueMap.get(this.key)[0];
}

Queue.prototype.isEmpty = function () {
    return this.queueMap.get(this.key).length === 0;
}

module.exports = Queue;
