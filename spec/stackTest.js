import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('myPush()', () => {
    it('pushes an element to the top of the stack.', () => {
      const pushStack = new Stack()

      expect( () => pushStack.myPush('foo')).to.alter(() => pushStack.top, { from: 0, to: 1 })
    })
  })

  context('myPop()', () => {
    it('returns null if the stack is empty.', () => {
      const popStack = new Stack()

      expect(popStack.myPop() ).to.equal(null)
    })

    it('returns the top element in the stack or null if the stack is empty.', () => {
      const popStack = new Stack()
      popStack.myPush('mocha')

      expect(popStack.myPop() ).to.equal('mocha')
    })
  })

  context('peek()', () => {
    it('returns null if the stack is empty.', () => {
      const peekStack = new Stack()

      expect(peekStack.peek() ).to.equal(null)
    })

    it('returns the top element in the stack.', () => {
      const peekStack = new Stack()
      peekStack.myPush('latte')

      expect(peekStack.peek() ).to.equal('latte')
    })
  })

  context('isEmpty()', () => {
    it('returns true if the stack is empty or false if not.', () => {
      const myStack = new Stack()

      expect(myStack.isEmpty() ).to.equal(true)
    })

    it('returns false if the stack is not empty', () => {
      const myStack = new Stack()
      myStack.myPush('chai')

      expect(myStack.isEmpty() ).to.equal(false)
    })
  })

  context('myLength()', () => {
    it('returns the number of elements in the stack.', () => {
      const myStack = new Stack()

      expect(myStack.myLength() ).to.equal(0)
    })

    it('returns the number of elements in the stack.', () => {
      const myStack = new Stack()
      myStack.myPush('cold brew')

      expect(myStack.myLength() ).to.equal(1)
    })
  })

})
