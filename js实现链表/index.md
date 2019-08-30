## 实现一个链表类LinkedList
- append(element)：向列表尾部添加一个新的项。
- insert(position, element)：向列表的特定位置插入一个新的项。
- remove(element)：从列表中移除一项。
- indexOf(element)：返回元素在列表中的索引。如果列表中没有该元素则返回-1。
- removeAt(position)：从列表的特定位置移除一项。
- isEmpty()：如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
- size()：返回链表包含的元素个数。与数组的length属性类似。
- toString()：由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值。


链表的特点： 
  链表的元素不是连续放置的，每个元素除了存储自身的值外，还存储着下一个元素的地址，最后一个元素存储的下一个元素地址为null，如果需要访问或者添加链表中的一个元素，需要从起点开始寻找。

