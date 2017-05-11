import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DirectedGraph from '../../src/advanced/DirectedGraph'

chai.use(chaiChange)

describe('DirectedGraph()', () => {

	it('exists', () => {
		expect(DirectedGraph).to.be.a('function')
	})

	context('addVertex(value)', () => {
		it('adds a vertex to the graph', () => {
			const diGraph = new DirectedGraph()
			diGraph.addVertex('v1')

			expect(diGraph._count).to.equal(1)
			expect(diGraph.addVertex(undefined) ).to.equal(undefined)
		})
	})

	context('hasVertex(value)', () => {
		it('returns true if the graph contains the vertex or false if not', () => {
			const diGraph = new DirectedGraph()
			diGraph.addVertex('v1')

			expect(diGraph.hasVertex('v1')).to.equal(true)
			expect(diGraph.hasVertex('v2') ).to.equal(false)
		})
	})

	context('addDirection(vertex1, vertex2)', () => {
		it("adds a direction from 'v1' to 'v2'", () => {
			const diGraph = new DirectedGraph()
			diGraph.addVertex('v1')
			diGraph.addVertex('v2')
			diGraph.addDirection('v1', 'v2')

			expect(diGraph.hasDirection('v1', 'v2')).to.equal(true)
		})
	})

	context('hasDirection(vertex1, vertex2)', () => {
		it("returns true if there's a direction from 'v1' to 'v2'", () => {
			const diGraph = new DirectedGraph()
			diGraph.addVertex('v1')
			diGraph.addVertex('v2')
			diGraph.addDirection('v1', 'v2')

			expect(diGraph.hasDirection('v1', 'v2')).to.equal(true)
			expect(diGraph.hasDirection('v1', 'v3')).to.equal(undefined)
		})
	})

	context("visit('v1', vertex => console.log(vertex))", () => {
		it('visit all the connected vertices in the graph starting with v1 and apply function on the reached vertex', () => {
			const diGraph = new DirectedGraph()
			diGraph.addVertex('v1')
			diGraph.addVertex('v2')
			diGraph.addVertex('v3')
			diGraph.addVertex('v4')
			diGraph.addVertex('v5')
			diGraph.addVertex('v6')
			diGraph.addDirection('v1', 'v2')
			diGraph.addDirection('v1', 'v3')
			diGraph.addDirection('v2', 'v4')
			diGraph.addDirection('v3', 'v4')
			diGraph.addDirection('v4', 'v5')
			diGraph.addDirection('v5', 'v6')


			diGraph.visit('v1', vertex => console.log(vertex))
		})
	})

	context('findPaths(vertex1, vertex2)', () => {
		it('returns an array of all the paths between two vertices', () => {
			const diGraph = new DirectedGraph()
			diGraph.addVertex('v1')
			diGraph.addVertex('v2')
			diGraph.addDirection('v1', 'v2')

			expect(diGraph.findPaths('v1', 'v2') ).to.deep.equal(['v2'])
		})
	})

	context('removeDirection(vertex1, vertex2)', () => {
		it("removes an existing direction between 'v1' and 'v2'", () => {
			const diGraph = new DirectedGraph()
			diGraph.addVertex('v1')
			diGraph.addVertex('v2')
			diGraph.addDirection('v1', 'v2')

			expect(diGraph.removeDirection('v1', 'v2') ).to.equal(0)
		})
	})

	context('getSeperatedVertices()', () => {
		it('returns an array of all the vertices that are unconnected to the graph (have no direction linking them to another vertex', () => {
			const diGraph = new DirectedGraph()
			diGraph.addVertex('v1')
			diGraph.addVertex('v2')
			diGraph.addVertex('v3')
			diGraph.addVertex('v4')
			diGraph.addVertex('v5')
			diGraph.addVertex('v7')
			diGraph.addDirection('v1', 'v2')
			diGraph.addDirection('v1', 'v3')
			diGraph.addDirection('v2', 'v4')
			diGraph.addDirection('v3', 'v4')
			diGraph.addDirection('v4', 'v5')

			expect(diGraph.getSeperatedVertices() ).to.deep.equal(['v7'])
		})
	})

	context("removeVertex('v1')", () => {
		it('returns an array of all the vertices that are unconnected to the graph (have no direction linking them to another vertex', () => {
			const diGraph = new DirectedGraph()
			diGraph.addVertex('v1')
			diGraph.addVertex('v2')

			diGraph.removeVertex('v1')
			console.log(diGraph);
			expect(diGraph.count() ).to.equal(1)
		})
	})

	context("count()", () => {
		it('returns the number of vertices in the graph', () => {
			const diGraph = new DirectedGraph()
			diGraph.addVertex('v1')
			diGraph.addVertex('v2')
			diGraph.addVertex('v3')

			expect(diGraph.count() ).to.equal(3)
		})
	})

})
