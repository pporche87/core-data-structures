import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Node from '../src/node'

chai.use(chaiChange)


describe.only('Node', () => {
  'use strict'

  const nodeA = new Node({data: 'apple'})
  const nodeB = new Node({data: 'banana'})


  it('exists', () => {
    expect(Node).to.be.a('function')
  })

  context('getData()', () => {

    it.only('return the data ("apple") of the node', () => {
      expect( nodeA.getData() ).to.equal('apple')
    })
  })

  // context('setNext()', () => {
  //   it('changes the reference to the next node', () => {
  //     expect( () => nodeA.setNext( nodeB ) ).to.alter( (nodeA.data.next), { from: undefined, to: nodeB } )
  //   })
  //
  //   it('returns the original', () => {
  //     return nodeA
  //   })
  // })
  //
  // context('getNext()', () => {
  //   it('returns the data of the node', () => {
  //     expect(node).to.equal("null")
  //   })
  // })
})
