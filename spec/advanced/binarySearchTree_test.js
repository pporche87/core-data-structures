import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../../src/advanced/BinarySearchTree'

chai.use(chaiChange)

describe('BinarySearchTree', () => {

	it('exists', () => {
		expect(BinarySearchTree).to.be.a('function')
	})

})
