import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { PriorityNode, PriorityQueues } from '../src/priorityQueues'

chai.use(chaiChange)

describe('PriorityQueues', () => {
  'use strict'

  it('exists', () => {
    expect(PriorityQueues).to.be.a('function')
  })


  context('enqueue()', () => {
    it('adds an element with priority (number) to the back of the queue.', () => {
      const myQueue = new PriorityQueues()

      expect( () => myQueue.enqueue('foo', 100)).to.alter(() => myQueue.counter, { from: 0, to: 1 })
    })
  })

  context('front()', () => {
    it('returns the front element in queue or null if the queue if the queue is empty.', () => {
      const myQueue = new PriorityQueues()

      expect(myQueue.front() ).to.equal(null)
    })
  })

  context('back()', () => {
    it('return the back element in the queue or null if the queue is empty.', () => {
      const myQueue = new PriorityQueues()

      expect(myQueue.back() ).to.equal(null)
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue or null if the queue is empty.', () => {
      const myQueue = new PriorityQueues()

      expect(myQueue.dequeue() ).to.equal(null)
    })
  })

  context('isEmpty()', () => {
    it('returns true if the queue is empty or false if not.', () => {
      const myQueue = new PriorityQueues()

      expect(myQueue.isEmpty() ).to.equal(true || false)
    })
  })

  context('myLength()', () => {
    it('returns the number of elements in the queue.', () => {
      const myQueue = new PriorityQueues()

      expect(myQueue.myLength() ).to.equal(0)
    })
  })



})
