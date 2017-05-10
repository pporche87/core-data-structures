import TreeNode from './treeNode'

export default class BinarySearchTree {
	constructor() {
		this.root = null
		this.count = 0
	}

	insert(value) {
		const root = this.root

		if(!root) {
			this.root = new TreeNode(value)
			this.count++
			return
		}

		let currentNode = root
		const newNode = new TreeNode(value)
		this.count++

		while(currentNode) {
			if (value < currentNode.value) {
				if (!currentNode.left) {
					currentNode.left = newNode
					break
				} else {
					currentNode = currentNode.left
				}
			} else {
				if (!currentNode.right) {
					currentNode.right = newNode
					break
				} else {
					currentNode = currentNode.right
				}
			}
		}
	}

	search(value) {
		let current = this.root

		while (current) {
			if (value === current.data) {
				return current.data
			}
			if (value < current.data) {
				current = current.left
			} else {
				current = current.right
			}
		} return false
	}

	remove(value) {
		let current = this.root

		while (current) {
			if (value === current.data) {
				delete current.data
				this.count--
				return this.count
			}
			if (value < current.data) {
				current = current.left
			} else {
				current = current.right
			}
		} return undefined
	}

	traverse(callback) {
		let currentNode = this.root
		while (currentNode !== null) {
			if (!currentNode.left) {
				callback(currentNode.data)
				currentNode = currentNode.right
			} else {
				let previousNode = currentNode.left
				while (previousNode.right !== null && previousNode.right !== currentNode) {
					previousNode = previousNode.right
				}
				if (!previousNode.right) {
					previousNode.right = currentNode
					currentNode = currentNode.left
				} else {
					previousNode.right = null
					callback(currentNode.data)
					currentNode = currentNode.right
				}
			}
		}
	}

	count() {
		return this.count
	}

}
