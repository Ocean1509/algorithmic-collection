/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let fast = head;
    let slow = head;
    debugger
    while(fast && k > 0) {
        fast = fast.next;
        k--
    }
    console.log(fast, '==')
    while(fast) {
        fast = fast.next;
        slow = slow.next
    }
    return slow
};

var head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5}}}}}

console.log(getKthFromEnd(head, 6))