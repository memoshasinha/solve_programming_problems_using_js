const remove_dup = require("./remove_dup_sorted");
function ListNode(val) {
    this.val = val;
    this.next = null;
}
test('sorted list', () => {
    let node1 = new ListNode(1);
    let node2 = new ListNode(1);
    let node3 = new ListNode(2);
    node1.next = node2;
    node2.next = node3;
    expect(remove_dup(node1)).toStrictEqual(node1);

});
