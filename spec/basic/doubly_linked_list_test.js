// import chai, { expect } from 'chai'
// import chaiChange from 'chai-change'
// import { Node, DoublyLinkedList } from '../src/doubly_linked_list'
//
// chai.use(chaiChange)
//
// describe('DoublyLinkedList', () => {
//
//   it('exists', () => {
//     expect(DoublyLinkedList).to.be.a('function')
//   })
//
//   context('getHeadNode()', () => {
//     it('returns the first node in the list.', () => {
//       const doublyLinkedList = new DoublyLinkedList()
//
//       doublyLinkedList.insert('manhattan')
//       doublyLinkedList.insert('tom collins')
//       doublyLinkedList.insert('rose kennedy')
//       doublyLinkedList.insert('hanky panky')
//       doublyLinkedList.insert('ramos fizz')
//
//       expect(doublyLinkedList.getHeadNode().element ).to.equal('manhattan')
//     })
//   })
//
//   context('getTailNode()', () => {
//     it('returns the last node in the list.', () => {
//       const doublyLinkedList = new DoublyLinkedList()
//
//       doublyLinkedList.insert('manhattan')
//       doublyLinkedList.insert('tom collins')
//       doublyLinkedList.insert('rose kennedy')
//       doublyLinkedList.insert('hanky panky')
//       doublyLinkedList.insert('ramos fizz')
//
//       expect(doublyLinkedList.getTailNode().element ).to.equal('ramos fizz')
//     })
//   })
//
//   context('myContains()', () => {
//     it('Determines whether the list contains the provided data.', () => {
//       const doublyLinkedList = new DoublyLinkedList()
//
//       doublyLinkedList.insert('manhattan')
//       doublyLinkedList.insert('tom collins')
//       doublyLinkedList.insert('rose kennedy')
//       doublyLinkedList.insert('hanky panky')
//       doublyLinkedList.insert('ramos fizz')
//
//       expect(doublyLinkedList.myContains('tom collins') ).to.equal(true)
//     })
//
//     it('Determines whether the list does not contain the provided data.', () => {
//       const doublyLinkedList = new DoublyLinkedList()
//
//       doublyLinkedList.insert('manhattan')
//       doublyLinkedList.insert('tom collins')
//       doublyLinkedList.insert('rose kennedy')
//       doublyLinkedList.insert('hanky panky')
//       doublyLinkedList.insert('ramos fizz')
//
//       expect(doublyLinkedList.myContains('daiquiri') ).to.equal(false)
//     })
//   })
//
//   context('find()', () => {
//     it('returns the first node containing the provided data.', () => {
//       const doublyLinkedList = new DoublyLinkedList()
//
//       doublyLinkedList.insert('manhattan')
//       doublyLinkedList.insert('tom collins')
//       doublyLinkedList.insert('rose kennedy')
//       doublyLinkedList.insert('hanky panky')
//       doublyLinkedList.insert('ramos fizz')
//
//       expect(doublyLinkedList.find('rose kennedy') ).to.equal('rose kennedy')
//     })
//
//     it('returns -1 if not found.', () => {
//       const doublyLinkedList = new DoublyLinkedList()
//
//       doublyLinkedList.insert('manhattan')
//       doublyLinkedList.insert('tom collins')
//       doublyLinkedList.insert('rose kennedy')
//       doublyLinkedList.insert('hanky panky')
//       doublyLinkedList.insert('ramos fizz')
//
//       expect(doublyLinkedList.find('daiquiri') ).to.equal(-1)
//     })
//   })
//
//   context('insert()', () => {
//     it('inserts a node (with the provided data) to the tail of the list.', () => {
//       const doublyLinkedList = new DoublyLinkedList()
//
//       doublyLinkedList.insert('manhattan')
//       doublyLinkedList.insert('tom collins')
//       doublyLinkedList.insert('rose kennedy')
//       doublyLinkedList.insert('hanky panky')
//       doublyLinkedList.insert('ramos fizz')
//
//       expect(doublyLinkedList.insert('dirty martini') ).to.equal(6)
//     })
//   })
//
//   context('insertFirst()', () => {
//     it('inserts a node (with the provided data) to the head of the list.', () => {
//       const doublyLinkedList = new DoublyLinkedList()
//
//       doublyLinkedList.insert('manhattan')
//       doublyLinkedList.insert('tom collins')
//       doublyLinkedList.insert('rose kennedy')
//       doublyLinkedList.insert('hanky panky')
//       doublyLinkedList.insert('ramos fizz')
//
//       expect(doublyLinkedList.insertFirst('dirty martini') ).to.equal('dirty martini')
//     })
//   })
//
//
// })
