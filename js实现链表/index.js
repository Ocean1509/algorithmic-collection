class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0
  }
  // 往链表尾端添加元素
  append(ele) {
    let node = new Node(ele);
    let current;
    // 链表为空，则直接将指针指向新元素
    if (!this.head) {
      this.head = node;
    } else {
      // 链表不为空，则从链表头部遍历到链表底部
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node
    }
    this.length++;
  }
  // 从链表的指定位置删除元素
  removeAt(position) {
    if (position < 0 || position > this.length - 1) return null
    let current = this.head;
    let previous;
    let index = 0;
    // 如果删除元素在头部，head指针向后移动一位
    if (position == 0) {
      this.head = current.next;
    } else {
    // 如果删除元素不在头部，当前元素的上一个元素的next指针会指向当前元素的下一个元素位置
      while (index < position) {
        previous = current;
        current = current.next
        index++
      }
      previous.next = current.next
    }
    this.length--
    return current.ele
  }
  // 任意位置插入元素
  insert(ele, position) {
    if(position > this.length || position < 0) return false
    let current = this.head;
    let previous;
    let index = 0;
    let newEle = new Node(ele);
    // 原理和removeAt类似
    if(position == 0) {
      newEle.next = current;
      this.head = newEle;
    } else {
      while(index < position) {
        previous = current;
        current = current.next;
        index++
      }
      previous.next = newEle;
      newEle.next = current;
    }
    this.length++
    return true
  }
  // 返回链表元素的字符串
  toString(symbol) {
    let current = this.head;
    let str = ''
    while(current) {
      str += current.ele + (current.next ? symbol : '')
      current = current.next;
    }
    return str
  }
  // 返回元素在列表中的索引
  indexOf(ele) {
    let index = -1;
    let current = this.head;
    while (current) {
      if(ele === current.ele) {
        return index
      }
      index++
      current = current.next;
    }
    return -1
  }
  // 判断链表是否有包含元素
  isEmpty() {
    return !!this.length
  }
  // 返回链表元素个数
  size() {
    return this.length
  }
}

class Node {
  constructor(ele) {
    this.ele = ele;
    this.next = null;
  }
}

let list = new LinkedList();
console.log(list.isEmpty())

list.append(12);
list.append(15);
list.append(123)
console.log(list)
// list.removeAt(0)
// list.removeAt(1)
list.insert(123,0)
console.log(list)

list.insert(111,1)
console.log(list)
console.log(list.toString(','))
console.log(list.indexOf(1232))
console.log(list.indexOf(12))
console.log(list.isEmpty())

