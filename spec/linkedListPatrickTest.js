import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { Node, LinkedList } from '../src/linkedListPatrick'

chai.use(chaiChange)

describe.only('LinkedList', () => {
  'use strict'
  let myLinkedList = new LinkedList()
  myLinkedList.insert('apple')
  myLinkedList.insert('banana')
  myLinkedList.insert('orange')
  myLinkedList.insert('mango')
  myLinkedList.insert('grape')


  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('getHeadNode()', () => {
    it('returns the first node in the list.', () => {

      expect(myLinkedList.getHeadNode().element ).to.equal('apple')
    })
  })

  context('getTailNode()', () => {
    it('returns the last node in the list.', () => {

      expect(myLinkedList.getTailNode().element ).to.equal('grape')
    })
  })

  context('myContains()', () => {
    it('Determines whether the list contains the provided data.', () => {

      expect(myLinkedList.myContains('banana') ).to.equal(true)
    })

    it('Determines whether the list does not contain the provided data.', () => {

      expect(myLinkedList.myContains('cat') ).to.equal(false)
    })
  })

  context('find()', () => {
    it('returns the first node containing the provided data.', () => {

      expect(myLinkedList.find('banana') ).to.equal('banana')
    })

    it('returns -1 if not found.', () => {

      expect(myLinkedList.find('cat') ).to.equal(-1)
    })
  })

  context('insert()', () => {
    it('inserts a node (with the provided data) to the tail of the list.', () => {

      expect(myLinkedList.insert('pinapple') ).to.equal(6)
    })
  })

  context('insertFirst()', () => {
    it('inserts a node (with the provided data) to the head of the list.', () => {
      myLinkedList.insertFirst('watermelon')
      expect(myLinkedList.head.element ).to.equal('watermelon')
    })
  })

  // context('insertBefore()', () => {
  //   it('inserts a node (with the provided data) to the head of the list.', () => {
  //     myLinkedList.insertFirst('watermelon')
  //     expect(myLinkedList.head.element ).to.equal('watermelon')
  //   })
  // })

  context('insertAfter()', () => {
    it('inserts a node (with the provided data) to the head of the list.', () => {
      myLinkedList.insertAfter('watermelon', 'coconut')
      expect(myLinkedList.head.next.element).to.equal('coconut')
    })
  })

  // ########################
  // context('remove()', () => {
  //   it('returns the first node in the list.', () => {
  //
  //     expect(myLinkedList.getHeadNode().element ).to.equal('apple')
  //   })
  // })

  context('removeFirst()', () => {
    it('removes the head node from the list.', () => {

      expect(myLinkedList.removeFirst() ).to.equal(5)
    })
  })

})
