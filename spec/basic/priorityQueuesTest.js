// import chai, { expect } from 'chai'
// import chaiChange from 'chai-change'
// import { PriorityNode, PriorityQueues } from '../../src/basic/priorityQueues'
//
// chai.use(chaiChange)
//
// describe('PriorityQueues', () => {
//   'use strict'
//
//   it('exists', () => {
//     expect(PriorityQueues).to.be.a('function')
//   })
//
//
//   context('enqueue()', () => {
//     const myQueue = new PriorityQueues()
//     it('adds an element with priority (number) to the back of the queue.', () => {
//       expect( () => myQueue.enqueue('daddyHunt', 200) ).to.alter(() => myQueue.counter, { by: 1 })
//       expect(myQueue.enqueue('manhunt', 45).data ).to.equal('manhunt')
//       expect(myQueue.enqueue('manhunt', 45).priority ).to.equal(45)
//     })
//   })
//
//   context('front()', () => {
//     it('returns the front element (highest priority) in the queue or null if the queue is empty.', () => {
//       const myQueue = new PriorityQueues()
//       expect(myQueue.front() ).to.equal(null)
//
//       myQueue.enqueue('grindr', 50)
//       myQueue.enqueue('daddyhunt', 200)
//       myQueue.enqueue('manhunt', 200)
//       myQueue.enqueue('her', 100)
//       myQueue.enqueue('bumble', 150)
//
//       expect(myQueue.front().data ).to.equal('daddyhunt')
//       expect(myQueue.front().priority ).to.equal(200)
//     })
//   })
//
//   context('back()', () => {
//     it('return the back element in the queue or null if the queue is empty.', () => {
//       const myQueue = new PriorityQueues()
//       expect(myQueue.myBack() ).to.equal(null)
//
//       myQueue.enqueue('grindr', 50)
//       myQueue.enqueue('daddyhunt', 200)
//       myQueue.enqueue('manhunt', 200)
//       myQueue.enqueue('her', 100)
//       myQueue.enqueue('bumble', 150)
//
//       expect(myQueue.myBack().data ).to.equal('grindr')
//       expect(myQueue.myBack().priority ).to.equal(50)
//     })
//   })
//
//   context('dequeue()', () => {
//     it('returns and removes the front element in the queue or null if the queue is empty.', () => {
//       const myQueue = new PriorityQueues()
//       expect(myQueue.dequeue() ).to.equal(null)
//
//       myQueue.enqueue('grindr', 50)
//       myQueue.enqueue('daddyhunt', 200)
//       myQueue.enqueue('manhunt', 200)
//       myQueue.enqueue('her', 100)
//       myQueue.enqueue('bumble', 150)
//
//       expect(myQueue.dequeue().data ).to.equal('daddyhunt')
//       expect(myQueue.dequeue().priority ).to.equal(200)
//     })
//   })
//
//   context('isEmpty()', () => {
//     it('returns true if the queue is empty or false if not.', () => {
//       const myQueue = new PriorityQueues()
//       expect(myQueue.isEmpty() ).to.equal(true)
//
//       myQueue.enqueue('grindr', 50)
//       myQueue.enqueue('daddyhunt', 200)
//       myQueue.enqueue('manhunt', 200)
//       myQueue.enqueue('her', 100)
//       myQueue.enqueue('bumble', 150)
//
//       expect(myQueue.isEmpty() ).to.equal(false)
//     })
//   })
//
//   context('myLength()', () => {
//     it('returns the number of elements in the queue.', () => {
//       const myQueue = new PriorityQueues()
//       expect(myQueue.myLength() ).to.equal(0)
//
//       myQueue.enqueue('grindr', 50)
//       myQueue.enqueue('daddyhunt', 200)
//       myQueue.enqueue('manhunt', 200)
//       myQueue.enqueue('her', 100)
//       myQueue.enqueue('bumble', 150)
//
//       expect(myQueue.myLength() ).to.equal(5)
//     })
//   })
//
//
//
// })
