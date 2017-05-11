export default class DirectedGraph {
	constructor() {
		this._nodes = {}
		this._count = 0
	}

	addVertex(value) {
		if (value === undefined) return
		this._nodes[value] = this._nodes[value] || []
		this._count++
	}

	hasVertex(value) {
		return this._nodes.hasOwnProperty(value)
	}

	addDirection(vertex1, vertex2) {
		if (!this._nodes[vertex1] || !this._nodes[vertex2]) return undefined
		this._nodes[vertex1].push(vertex2)
	}

	hasDirection(vertex1, vertex2) {
		if (!this._nodes[vertex1] || !this._nodes[vertex2]) return undefined
		const compareArray = Array.from(this._nodes[vertex1])
		return compareArray.includes(vertex2)
	}

	visit(vertex, callback) {
		// create an array "visited" to track keys of the verticies that you have seen
		const visited = []
		// create a function "recurseivelyVisit" that:
		const recurseivelyVisit = (vertexKey) => {
			// - takes a vertex key as a parameter
			// - calls the callback for that vertex
			callback(vertexKey)
			// - marks that vertex as visited
			visited.push(vertexKey)
			// - for every edge it has, check if the vertex has already been visited, and if not
			//   call "recurseivelyVisit" on it
			for (let i = 0; i < this._nodes[vertexKey].length; i++) {
				if(!visited.includes(this._nodes[vertexKey][i])) {
					recurseivelyVisit(this._nodes[vertexKey][i])
				}
			}
		}
		// call recurseivelyVisit() on the start vertex
		recurseivelyVisit(vertex)
		return visited
	}

	findPaths(vertex1, vertex2) {
		if (!this._nodes[vertex1].includes(vertex2)) return undefined
		return this._nodes[vertex1]
	}

	removeDirection(vertex1, vertex2) {
		const index = this._nodes[vertex1].indexOf(vertex2)
		if (index > -1) {
			this._nodes[vertex1].splice(index, 1)
		}
		return this._nodes[vertex1].length
	}

	getSeperatedVertices() {
		const visited = []
		const keyArray = Object.keys(this._nodes)

		const recurseivelyVisit = (vertexKey) => {
			visited.push(vertexKey)
			for (let i = 0; i < this._nodes[vertexKey].length; i++) {
				if(!visited.includes(this._nodes[vertexKey][i])) {
					recurseivelyVisit(this._nodes[vertexKey][i])
				}
			}
		}
		recurseivelyVisit(keyArray[0])

		const intersection = new Set([...keyArray].filter(x => !visited.includes(x)))

		if (!visited || ! keyArray) {
			return undefined
		} return Array.from(intersection)

	}

	removeVertex(vertex) {
		delete this._nodes[vertex]
		this._count--
	}

	count() {
		const countArray = Object.keys(this._nodes)
		return countArray.length
	}
}
