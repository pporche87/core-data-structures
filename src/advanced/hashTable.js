import { Node, LinkedList } from '../src/basic/linkedListPatrick'

export default class HashTable {
    constructor() {
      this._storage = {}
      this._count = 0
    }

    put(key, value) {
      const node = new Node(key, value)
      const hashNumber = hash(key)

      if (!this._storage.hasOwnProperty(hashNumber)) {
        const linkedList = new LinkedList()
        linkedList.insert(key, value)
        this._storage[hashNumber] = linkedList
      } else {
        linkedList.insert(node)
      }
      return this._count++
    }

    get(key) {
      const hashNumber = hash(key)
      if (this._storage.hasOwnProperty(hashNumber) && this.storage[hashNumber].hasOwnProperty(key)) {
        const linkedListValue = this._storage[hashNumber]
        return linkedListValue.findAndReturnValue(key)
      } else {
        return null
      }
    }

    contains(key) {
      const linkedList = this._storage[this.hash(key)]
      let hashNumber = hash(key)
      if(linkedList) {
        return linkedList.has(key)
      } else {
        return false
      }
    }

    iterate(callback) {
      Object.keys(this._storage).forEach( key => {
        callback(key, this._storage[key])
      })
    }

    remove(key) {
      if (this._storage.hasOwnProperty(hashNumber) && this._storage[hash].hasOwnProperty(key)) {
        const linkedList = this._storage[this.hash(key)]
        return this._count--
      } else {
        return false
      }
    }

    size() {
      return this._count
    }

    hash(key) {
      return key.toString().length % this._size
    }
}
