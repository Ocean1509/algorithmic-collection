/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let tempNode = {
    val: undefined,
    next: null
  }
  let tempCurrent = tempNode;
  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      tempCurrent.next = l2;
      l2 = l2.next
    } else {
      tempCurrent.next = l1;
      l1 = l1.next
    }
    tempCurrent = tempCurrent.next;
  }
  tempCurrent.next = l1 ? l1 : l2;
  return tempNode.next
};

var ListNode1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}
var ListNode2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}

console.log(mergeTwoLists(ListNode1, ListNode2))