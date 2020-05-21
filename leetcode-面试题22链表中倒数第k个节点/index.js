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
// 双指针法
var getKthFromEnd = function (head, k) {
  let i = 0;
  let j = 0;
  let current = head;
  let result = head
  while(current) {
    if(i >= k) {
      result = result.next;
      j++
    }
    i++
    current = current.next;
  }
  return result
};

// 常规方法，遍历，记录
// var getKthFromEnd = function (head, k) {
//   const map = new Map();
//   let i = 0;
//   let current = head;
//   while (current) {
//     map.set(i++, current)
//     current = current.next;
//   }
//   return map.get(i - k)
// };
var head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}
console.log(head)
console.log(getKthFromEnd(head, 2))
