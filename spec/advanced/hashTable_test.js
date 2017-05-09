import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/advanced/hashTable'

chai.use(chaiChange)

describe('LinkedList', () => {

  it.only('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('getHeadNode()', () => {
    it('returns the first node in the list.', () => {
      expect(myLinkedList.getHeadNode().element ).to.equal('apple')
    })
  })

})
