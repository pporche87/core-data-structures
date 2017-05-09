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
		it('adds a new key-value pair to the hash table', () => {
			const ht = new HashTable()
			ht.put('Enumerations', 'Flexible')
			ht.put('Swift', 'Language')
			expect(ht.size() ).to.equal(2)
			expect(ht.myGet('Enumerations') ).to.equal('Flexible')
		})
	})

	context('myGet(key)', () => {
		it('returns the value associated with a key', () => {
			const ht = new HashTable()
			ht.put('Enumerations', 'Flexible')
			ht.put('Swift', 'Language')
			expect(ht.size() ).to.equal(2)
			expect(ht.myGet('Swift') ).to.equal('Language')
		})
	})

	context('myGet(key)', () => {
		it('returns -1 if the key does not exist in the table', () => {
			const ht = new HashTable()
			ht.put('Enumerations', 'Flexible')
			ht.put('Swift', 'Language')
			expect(ht.size() ).to.equal(2)
			expect(ht.myGet('Classes and Structures') ).to.equal(-1)
		})
	})

	context('myRemove(key)', () => {
		it('returns false if the key does not exist in the table', () => {
			const ht = new HashTable()
			ht.put('Enumerations', 'Flexible')
			ht.put('Swift', 'Language')
			// expect(ht.size() ).to.equal(2)
			ht.myRemove('Enumerations')
			expect(ht.myContains('Enumerations') ).to.equal(false)
		})
	})

	context('contains(key)', () => {
		it('returns true is the table contains a given key', () => {
			const ht = new HashTable()
			ht.put('Enumerations', 'Flexible')
			expect(ht.size() ).to.equal(1)
			expect(ht.myContains('Enumerations') ).to.equal(true)
		})
		it('returns false is the table contains a given key', () => {
			const ht = new HashTable()
			ht.put('Enumerations', 'Flexible')
			expect(ht.size() ).to.equal(1)
			expect(ht.myContains('Methods') ).to.equal(false)
		})
	})

	context('size()', () => {
		it('returns the length of the table', () => {
			const ht = new HashTable()
			ht.put('Enumerations', 'Flexible')
			expect(ht.size() ).to.equal(1)
		})
		it('return 0 if the table is empty', () => {
			const ht = new HashTable()
			expect(ht.size() ).to.equal(0)
		})
	})

	context('iterate(callback)', () => {
		it('runs a callback function on each key in the table', () => {
			const ht = new HashTable()
			ht.put('Enumerations', 'Flexible')
			ht.put('Swift', 'Language')
			ht.iterate((k, v) => console.log(`${k}: ${v}`))
		})
	})
})
