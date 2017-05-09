import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../../src/advanced/hashTable'

chai.use(chaiChange)

describe('HashTable', () => {

	it('exists', () => {
		expect(HashTable).to.be.a('function')
	})

	context('hash(key)', () => {
		it('returns the hashed integer value of a given string', () => {
			const ht = new HashTable()
			expect(ht.hash('Collection Types') ).to.equal(1601)
			expect(ht.hash('Control Flow') ).to.equal(1177)
			expect(ht.hash('Functions') ).to.equal(953)
			expect(ht.hash('Closures') ).to.equal(848)
		})

		it('always return the same hashed integer for the same string', () => {
			const ht = new HashTable()
			expect(ht.hash('Collection Types') ).to.equal(1601)
			expect(ht.hash('Collection Types') ).to.equal(1601)
		})

		it('returns null if provided input is not a string', () => {
			const ht = new HashTable()
			expect(ht.hash(1601) ).to.equal(null)
		})
	})

	context('put(key)', () => {
		it('returns the hashed integer value of a given string', () => {
			const ht = new HashTable()
			ht.put('Enumerations', 'Flexible')
			ht.put('Swift', 'Language')
			// console.log(ht);
			expect(ht.size() ).to.equal(2)
			expect(ht.myGet('Enumerations') ).to.equal('Flexible')
		})
	})

})
