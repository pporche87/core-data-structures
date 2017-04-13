import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {

      it('exists', () => {
        expect(Stack).to.be.a('function')
      })

      context('myPush()', () => {
        it('pushes an element to the top of the stack.', () => {
          const myStack = new Stack()

          expect( () => myStack.myPush('foo')).to.alter(() => myStack.top, { from: 0, to: 1 })
        })
      })

      context('myPop()', () => {
        it('returns the top element in the stack or null if the stack is empty.', () => {
          const myStack = new Stack()

          expect(myStack.myPop() ).to.equal(null)
        })
      })

      context('peek()', () => {
        it('returns the top element in the stack or null if the stack is empty.', () => {
          const myStack = new Stack()

          expect(myStack.peek() ).to.equal(null)
        })
      })

      context('isEmpty()', () => {
        it('returns true if the stack is empty or false if not.', () => {
          const myStack = new Stack()

          expect(myStack.isEmpty() ).to.equal(true || false)
        })
      })

      context('length()', () => {
        it('returns the number of elements in the stack.', () => {
          const myStack = new Stack()

          expect(myStack.myLength() ).to.equal(0)
        })
      })
      
})
