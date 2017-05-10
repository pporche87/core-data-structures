import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../../src/advanced/BinarySearchTree'

chai.use(chaiChange)

describe('BinarySearchTree', () => {

	it('exists', () => {
		expect(BinarySearchTree).to.be.a('function')
	})

	context('insert(value)', () => {
		it('returns the nodes data', () => {
			const bst = new BinarySearchTree()
			bst.insert(3)
			bst.insert(9)
			bst.insert(15)

			expect(bst.count).to.equal(3)
		})
	})

	context('search(value)', () => {
		it('returns the nodes data', () => {
			const bst = new BinarySearchTree()
			bst.insert(3)
			bst.insert(9)
			bst.insert(15)

			expect(bst.search(3) ).to.equal(3)
			expect(bst.search(7) ).to.equal(false)
		})
	})

	context('remove(value)', () => {
		it('removes a values node (if exists) from the tree', () => {
			const bst = new BinarySearchTree()
			bst.insert(3)
			bst.insert(9)
			bst.insert(15)

			bst.remove(3)
			expect(bst.count).to.equal(2)
		})
	})

	context('traverse(callback)', () => {
		it('traverse the tree using in-order traversal and apply function on each nodes value', () => {
			const bst = new BinarySearchTree()
			bst.insert(3)
			bst.insert(9)
			bst.insert(15)

			bst.traverse((val) => console.log(val))
		})
	})

	context('count()', () => {
		it('return the number of nodes in the tree', () => {
			const bst = new BinarySearchTree()
			bst.insert(3)
			bst.insert(9)
			bst.insert(15)

			expect(bst.count).to.equal(3)
		})
	})

})
