class Node {
	constructor(key, value) {
		this.key = key
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this._length = 0
		this.head = null
		this.tail = null
	}

	getHeadNode() {
		// Returns the first node in the list
		return this.head
	}

	getTailNode() {
		// Returns the last node in the list
		return this.tail
	}

	myContains(nodeElement) {
		// Determines whether or not the list contains the provided data
		let currentNode = this.head

		while(currentNode.next !== null){
			if(currentNode.key === nodeElement){
				return true
			}

			currentNode = currentNode.next
		}
		if(nodeElement === this.tail.key){
			return true
		}
		return false
	}

	myFind(nodeElement) {
		// Returns the first node containing the provided data, or -1 if not found
		let currentNode = this.head

		do {
			if(currentNode.key === nodeElement){
				return currentNode
			}

			currentNode = currentNode.next
		} while (currentNode !== null)

		if(nodeElement === this.tail.key){
			return currentNode.value
		} return -1
	}

	findAndReturnValue(key) {
		let node = this.myFind(key)
		return node.value
	}

	insert(key, value) {
		// Inserts a node (with the provided data) to the tail of the list
		this._length++

		const newNode = new Node(key, value), currentNode = this.head

		if( !currentNode ){
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}
		return this._length
	}

	insertFirst(nodeElement) {
		// Inserts a node (with the provided data) to the head of the list
		const newNode = new Node(nodeElement)
		newNode.next = this.head
		this.head = newNode
	}

	insertBefore(newNodeElement, nodeElement) {
		// Inserts a node (with data "apples") before the first node containing "bananas"
		let insertNode = new Node(newNodeElement)
		let currentNode = this.head

		if(this.size === 1){
			insertNode.next = this.head
			this.head = insertNode
		}
		while(currentNode){
			if(currentNode.next.key === nodeElement){
				insertNode.next = currentNode.next
				currentNode.next = insertNode
				return
			} else {
				currentNode = currentNode.next
			}
			if(currentNode === this.tail){
				return `${currentNode} does not exist`
			}
		}
	}

	insertAfter(nodeElement, newNodeElement) {
		// Inserts a node (with data "bananas") after the first node containing "apples"
		let insertNode = new Node(newNodeElement)
		let currentNode = this.head

		if(this._length === 1) {
			currentNode.next = insertNode
		}
		while(currentNode) {
			if(currentNode.element === nodeElement) {
				insertNode.next = currentNode.next
				currentNode.next = insertNode
				return
			} else {
				currentNode = currentNode.next
			}
			if(currentNode.next === this.tail){
				return `${nodeElement} does not exist`
			}
		}
		this._length++
	}

	remove() {
		// Removes the tail node from the list
		let currentNode = this.head

		while(currentNode.next){
			if(currentNode.next === this.tail){
				currentNode.next = null
				this._length--
				return this._length
			}
			currentNode = currentNode.next
		}
		return this._length
	}

	removeFirst() {
		// Removes the head node from the list
		this._length--
		let currentNode = this.head
		this.head = currentNode.next
		return this._length
	}

	isEmpty() {
		// Determines if the list is empty or not
		if(this._length === 0){
			return true
		} else {
			return false
		}
	}

	mySize() {
		//Returns the size of the list (number of nodes)
		return this._length
	}

	clear() {
		// Clears the list of all nodes/data
		this._length = 0
		this.head = null
		this.tail = null

		return this._length
	}

	}

export { Node, LinkedList }
