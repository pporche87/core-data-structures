// import chai, { expect } from 'chai'
// import chaiChange from 'chai-change'
// import Set from '../../src/basic/set'
//
// chai.use(chaiChange)
//     let set
//
// describe('Set', () => {
//     beforeEach( () => {
//         set = new Set()
//     })
//
//     it('check to see if Set is a function', () => {
//       expect(Set).to.be.a('function')
//     })
//
//     context('add', () => {
//         it('adds an element to the set', () => {
//             set.add('B')
//             expect(set.set).to.eql(['B'])
//         })
//     })
//
//     context('isEmpty', () => {
//         it('returns false if the set is not empty', () => {
//             set.add(14)
//
//             expect(set.isEmpty()).to.deep.equal(false)
//         })
//
//         it('returns true if the set is empty', () => {
//
//             expect(set.isEmpty()).to.deep.equal(true)
//         })
//     })
//
//     context('remove', () => {
//         it('removes an element (if it exists) from the set', () => {
//             expect(set.remove()).to.equal()
//         })
//     })
//
//     context('contains', () => {
//         it('returns true if the set contains the element ', () => {
//             set.add('A')
//             expect(set.contains('A')).to.equal(true)
//         })
//
//         it('returns false if set has nothing', () => {
//             set.add()
//             expect(set.contains()).to.equal(false)
//         })
//     })
//
//     context('union', () => {
//         it('unions the set with another set and returns the resulting set', () => {
//             set.add('A')
//             expect(set.union(['1', '2', '3', '1'])).to.eql(['A', '1', '2', '3'])
//         })
//     })
//
//     // context.only('intersect', () => {
//     //     it('intersects the set with another set and returns the resulting set', () => {
//     //         const set2 = new Set()
//     //         set.add(1)
//     //         set.add(4)
//     //         set2.add(4)
//     //         set2.add(2)
//     //
//     //         expect(set.intersect()).to.eql([4])
//     //     })
//     // })
//
//     context('clone', () => {
//         it('clones a set', () => {
//             set.add(14)
//             set.add(41)
//             set.add(4)
//             set.add(1)
//             set.add(0)
//
//             expect(set.clone()).to.eql(set.set)
//         })
//     })
//
//
// })
