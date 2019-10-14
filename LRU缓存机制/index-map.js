class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map()
  }

  get(key) {
    let val = this.map.get(key)
    if (typeof val === 'undefined') {
      return -1
    }
    this.map.delete(key)
    this.map.set(key, val)
    return val
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key)
    }

    this.map.set(key, value)
    let keys = this.map.keys()
    while (this.map.size > this.capacity) {
      this.map.delete(keys.next().value)
    }
  }
}