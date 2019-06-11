export default class queue {
    constructor() {
        this.items = []
    }

    // 尾部插入元素
    enqueue(el) {
        this.items.push(el)
    }

    // 头部删除元素
    dequeue(el) {
        return this.items.shift()
    }

    // 返回头部元素（不是删除）
    head() {
        return this.items[0]
    }

    // 返回队列大小
    size() {
        return this.items.length
    }

    // 清空队列
    clear() {
        this.items = []
    }

    // 判断队列是否为空
    isEmpty() {
        return this.items.length === 0
    }

    // 返回队列尾节点
    tail() {
        return this.items[this.items.length - 1]
    }
}