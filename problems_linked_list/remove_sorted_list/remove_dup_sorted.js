/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head.next === null) return head;
    let res = head;
    while(res != null && res.next !== null){
        if (res.next.val == res.val) {
            res.next = res.next.next;
        } else {
            res = res.next;
        }
    }
    return head;
};

module.exports = deleteDuplicates;
function ListNode(val) {
        this.val = val;
        this.next = null;
     }
let node1 = new ListNode(1);
let node2 = new ListNode(1);
let node3 = new ListNode(2);
node1.next = node2;
node2.next  = node3;

console.log(deleteDuplicates(node1));