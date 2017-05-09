export default class TreeNode {
	constructor(data, left, right) {
		this.data = data
		this.left = null
		this.right = null
	}

	getData() {
		return this.data
	}

	getLeft() {
		return this.left
	}

	setLeft(leftReference) {
		this.left = leftReference
		return this.data
	}

	getRight() {
		return this.right
	}

	setRight(rightReference) {
		this.right = rightReference
		return this.data
	}

}
