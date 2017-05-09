import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queues from '../src/queues'

chai.use(chaiChange)

describe('Queues', () => {
  'use strict'

  it('exists', () => {
    expect(Queues).to.be.a('function')
  })


  context('enqueue()', () => {
    it('adds an element with priority (number) to the back of the queue.', () => {
      const myQueue = new Queues()

      expect( () => myQueue.enqueue('tesla')).to.alter( () => myQueue._newestIndex, { by: 1 })
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue.', () => {
      const myQueue = new Queues()
      myQueue.enqueue('bmw')

      expect(myQueue.dequeue() ).to.equal('bmw')
    })

    it('returns null if the queue is empty.', () => {
      const myQueue = new Queues()

      expect(myQueue.dequeue() ).to.equal(null)
    })
  })

  context('front()', () => {
    it('returns the front element in queue.', () => {
      const myQueue = new Queues()

      expect(myQueue.front() ).to.equal(null)
    })

    it('returns null if the queue if the queue is empty.', () => {
      const myQueue = new Queues()
      myQueue.enqueue('mercedes')
      myQueue.enqueue('porsche')

      expect(myQueue.front() ).to.equal('mercedes')
    })
  })

  context('myBack()', () => {
    it('return the back element in the queue.', () => {
      const myQueue = new Queues()
      myQueue.enqueue('audi')
      myQueue.enqueue('ferrari')

      expect(myQueue.myBack() ).to.equal('ferrari')
    })

    it('return null if the queue is empty.', () => {
      const myQueue = new Queues()

      expect(myQueue.myBack() ).to.equal(null)
    })
  })

  context('isEmpty()', () => {
    it('returns true if the queue is empty.', () => {
      const myQueue = new Queues()

      expect(myQueue.isEmpty() ).to.equal(true)
    })

    it('returns false if the queue not empty.', () => {
      const myQueue = new Queues()
      myQueue.enqueue('maserati')

      expect(myQueue.isEmpty() ).to.equal(false)
    })
  })

  context('myLength()', () => {
    it('returns the number of elements in the queue.', () => {
      const myQueue = new Queues()
      myQueue.enqueue('landrover')
      myQueue.enqueue('lexus')
      myQueue.enqueue('acura')
      myQueue.dequeue()

      expect(myQueue.myLength() ).to.equal(2)
    })
  })
})
