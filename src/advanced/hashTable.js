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

	myContains(key) {
		const linkedList = this.storage[this.hash(key)]
		if(linkedList) {
			return linkedList.myHas(key)
		} else {
			return false
		}
	}

	iterate(callback) {
		Object.keys(this.storage).forEach( key => {
			callback(key, this.storage[key])
		})
	}

	myRemove(key) {
		const hashNumber = this.hash(key)
		// const checkBool = hashNumber in this.storage
		// console.log(checkBool);
		if(!(hashNumber in this.storage)) {
			return false
		} else {
			const linkedList = this.storage[hashNumber]
			linkedList.removeBy(hashNumber)
			this.count--
			return this.count
		}
	}

	size() {
		return this.count
	}
}
