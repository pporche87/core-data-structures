import { Node, LinkedList } from './linkedListHashTable'

export default class HashTable {
	constructor() {
		this.storage = {}
		this.count = 0
	}

	hash(key) {
		if (typeof key === 'string') {
			let hash = 0
			for (let i = 0; i < key.length; i++) {
				hash += key.charCodeAt(i)
			}
			return hash
		}
		return null
	}

	put(key, value) {
		const hashNumber = this.hash(key)
		const node = new Node(hashNumber, value)
		console.log(node);
		if (!this.storage.hasOwnProperty(hashNumber)) {
			const linkedList = new LinkedList()
			linkedList.insert(hashNumber, value)
			this.storage[hashNumber] = linkedList
		} else {
			this.storage[hashNumber].insert(node)
		}
		this.count++
		return this.count
	}

	myGet(key) {
		const hashNumber = this.hash(key)
		if(!(hashNumber in this.storage)) {
			return -1
		} else {
			const linkedListValue = this.storage[hashNumber]
			return linkedListValue.findAndReturnValue(hashNumber)
		}
	}

	contains(key) {
		const linkedList = this.storage[this.hash(key)]
		if(linkedList) {
			return linkedList.has(key)
		} else {
			return false
		}
	}

	iterate(callback) {
		Object.keys(this.storage).forEach( key => {
			callback(key, this.storage[key])
		})
	}

	remove(key) {
		const hashNumber = this.hash(key)
		if (this.storage.hasOwnProperty(hashNumber) && this.storage[hashNumber].hasOwnProperty(key)) {
			let linkedList = new linkedList()
			linkedList = this.storage[this.hash(key)]
			return this.count--
		} else {
			return false
		}
	}

	size() {
		return this.count
	}

}
