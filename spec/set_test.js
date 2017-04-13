import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)
    let set
    // const set = new Set(['A', 'B', 'C'])
    // const otherSet = new Set(['B', 'C', 'E'])

describe.only('Set', () => {
    beforeEach( () => {
        set = new Set()
    })

    it('check to see if Set is a function', () => {
      expect(Set).to.be.a('function')
    })

    context('isEmpty', () => {
        it('returns false if the set is not empty', () => {
            set.add(14)

            expect(set.isEmpty()).to.deep.equal(false)
        })

        it('returns true if the set is empty', () => {

            expect(set.isEmpty()).to.deep.equal(true)
        })
    })
    context('remove', () => {
        it('removes an element (if it exists) from the set', () => {
            expect(set.remove()).to.equal()
        })
    })

    // context('union', () => {
    //     it(' unions the set with another set and returns the resulting set', () => {
    //         expect(set.union()).to.be.equal('A', 'B', 'C','B', 'C', 'E')
    //     })
    // })

    context('forEach', () => {
        const element = (['A', 'B', 'C'])
        it('takes a callback function and passes it each element in sequence', () => {
            set.forEach('D')
            expect(set.data.forEach()).to.be.equal(element)
        })
    })




})
