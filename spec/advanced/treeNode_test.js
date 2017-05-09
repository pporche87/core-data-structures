import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import TreeNode from '../../src/advanced/TreeNode'

chai.use(chaiChange)

describe('TreeNode', () => {

	it('exists', () => {
		expect(TreeNode).to.be.a('function')
	})

	context('getData()', () => {
		it('returns the nodes data', () => {
			const leastNode = new TreeNode({data: 3})

			expect(leastNode.getData() ).to.deep.equal({data: 3})
		})
	})

	context('getLeft()', () => {
		it('returns the left node or null if none', () => {
			const leastNode = new TreeNode({data: 3})
			const moreNode = new TreeNode({data: 10})

			moreNode.setLeft(leastNode)
			expect(moreNode.getLeft() ).to.equal(leastNode)
			expect(moreNode.getRight() ).to.equal(null)
		})
	})

	context('setleft(leftReference)', () => {
		it('changes the reference to the left node and returns the original node', () => {
			const leastNode = new TreeNode({data: 3})
			const moreNode = new TreeNode({data: 10})
			const midNode = new TreeNode({data: 7, left: leastNode, right: moreNode})

			midNode.setLeft(leastNode)
			expect(midNode.left).to.equal(leastNode)
		})
	})

	context('getRight()', () => {
		it('returns the right node or null if none', () => {
			const leastNode = new TreeNode({data: 3})
			const moreNode = new TreeNode({data: 10})

			moreNode.setRight(leastNode)
			expect(moreNode.getRight() ).to.equal(leastNode)
			expect(moreNode.getLeft() ).to.equal(null)
		})
	})

	context('setRight(rightReference)', () => {
		it('changes the reference to the right node and returns the original node', () => {
			const leastNode = new TreeNode({data: 3})
			const moreNode = new TreeNode({data: 10})
			const midNode = new TreeNode({data: 7, left: leastNode, right: moreNode})

			midNode.setRight(moreNode)
			expect(midNode.right).to.equal(moreNode)
		})
	})

})
