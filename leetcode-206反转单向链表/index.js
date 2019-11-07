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
var reverseList = function (head) {
  if(!head.next) return head;
  var current = head;
  var pre = null;
  var next
  while(current) {
    next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  return pre
};



var listnodes = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: null }}}}


console.log(reverseList(listnodes))