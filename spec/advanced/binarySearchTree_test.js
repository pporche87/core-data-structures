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
			console.log(bst);

			expect(leastNode.getData() ).to.deep.equal({data: 3})
		})
	})

})
