function kthToLastNode(head, k) {

    if (k < 1) {
        throw new Error(`Impossible to find less than first to last node: ${k}`);
    }

    let leftNode = head;
    let rightNode = head;
    for (let i = 0; i < k; i++) {
        rightNode = rightNode.next;

    }
    if (rightNode == null)
        return leftNode.next;
    while (rightNode.next) {
        leftNode = leftNode.next;
        rightNode = rightNode.next;
    }
    leftNode.next = leftNode.next.next;
    return head;
}
class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const a = new LinkedListNode('Angel Food');
const b = new LinkedListNode('Bundt');
const c = new LinkedListNode('Cheese');
const d = new LinkedListNode("Devil's Food");
const e = new LinkedListNode('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(a, 2));