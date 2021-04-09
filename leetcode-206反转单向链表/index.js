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
// var reverseList = function (head) {
//   if(!head.next) return head;
//   var current = head;
//   var pre = null;
//   var next
//   while(current) {
//     next = current.next;
//     current.next = pre;
//     pre = current;
//     current = next;
//   }
//   return pre
// };

var root = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}



var listnodes = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: null }}}}

var reverseList = function (head) {
  var current = head;
  var pre = null;

  while (current !== null) {
    next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }

  return pre
}

console.log(reverseList(listnodes))

