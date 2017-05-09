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

	}

	remove(value) {

	}

	traverse(value, callback) {

	}

	count() {

	}

}
