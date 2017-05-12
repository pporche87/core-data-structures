# Advanced Data Structures
# TEAM: Patrick Porche
# TEAM NAME: drab-egret

Tests and implementations for advanced data structures. See the full list in the [data-structures.md](data-structures.md) file.

Base repository for the [Advanced Data Structures](http://jsdev.learnersguild.org/goals/157) goal.

## Installation and Setup

For this project, we created both tests and implementations of core data structures. Begin with installing your dependencies from the package.json file.

Check for mocha and chai in your .json file. If not already provided, use the link below to install.

[jsdoc]: http://usejsdoc.org/
[npm]: https://www.npmjs.com/
[npm-documentation]: https://www.npmjs.com/package/documentation
[mocha]: https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
[chai]: http://chaijs.com/

Use `npm install` in order to install all dependencies.

## Usage and Examples
This is the treeNode function in my treeNode.js file, it helps implement a standard binary search tree acting as nodes on a new linked list.

```javascript
export default class TreeNode {
	constructor(data, left, right) {
		this.data = data
		this.left = null
		this.right = null
	}

	getData() {
		return this.data
	}

	getLeft() {
		return this.left
	}

	setLeft(leftReference) {
		this.left = leftReference
		return this.data
	}

	getRight() {
		return this.right
	}

	setRight(rightReference) {
		this.right = rightReference
		return this.data
	}
}
```
This is the treeNode test function in my treeNode_Test.js file, it checks to see if the data returned matches the data expected from common treeNode functions.  
```javascript
import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import TreeNode from '../../src/advanced/TreeNode'

chai.use(chaiChange)

describe('TreeNode', () => {

	it('exists', () => {
		expect(TreeNode).to.be.a('function')
	})

	context('getData()', () => {
		it('returns the nodes data', () => {
			const leastNode = new TreeNode({data: 3})

			expect(leastNode.getData() ).to.deep.equal({data: 3})
		})
	})

	context('getLeft()', () => {
		it('returns the left node or null if none', () => {
			const leastNode = new TreeNode({data: 3})
			const moreNode = new TreeNode({data: 10})

			moreNode.setLeft(leastNode)
			expect(moreNode.getLeft() ).to.equal(leastNode)
			expect(moreNode.getRight() ).to.equal(null)
		})
	})

	context('setleft(leftReference)', () => {
		it('changes the reference to the left node and returns the original node', () => {
			const leastNode = new TreeNode({data: 3})
			const moreNode = new TreeNode({data: 10})
			const midNode = new TreeNode({data: 7, left: leastNode, right: moreNode})

			midNode.setLeft(leastNode)
			expect(midNode.left).to.equal(leastNode)
		})
	})

	context('getRight()', () => {
		it('returns the right node or null if none', () => {
			const leastNode = new TreeNode({data: 3})
			const moreNode = new TreeNode({data: 10})

			moreNode.setRight(leastNode)
			expect(moreNode.getRight() ).to.equal(leastNode)
			expect(moreNode.getLeft() ).to.equal(null)
		})
	})

	context('setRight(rightReference)', () => {
		it('changes the reference to the right node and returns the original node', () => {
			const leastNode = new TreeNode({data: 3})
			const moreNode = new TreeNode({data: 10})
			const midNode = new TreeNode({data: 7, left: leastNode, right: moreNode})

			midNode.setRight(moreNode)
			expect(midNode.right).to.equal(moreNode)
		})
	})

})
```
# Specifications
- [x] Artifact produced is a fork of the [core-data-structures][core-data-structures] repo.
- [x] Can run all tests with npm test.
- [x] All tests are passing.
- [x] Unit tests exist for all methods of Hash Table.
- [x] A working implementation of the Binary (Search) Tree data structure is complete.
- [x] Unit tests exist for all methods of Binary (Search) Tree.
- [x] A working implementation of the Tree Node data structure is complete.
- [x] Unit tests exist for all methods of Tree Node.
- [x] A working implementation of the Directed Graph data structure is complete.
- [x] Unit tests exist for all methods of Directed Graph.
- [x] Repository includes a README file with basic installation and setup instructions.
- [x] All dependencies are properly declared in package.json.
- [x] All major features are added via pull requests with a clear description and concise commit messages.
- [x] Code uses a linter and there are no linting errors.
- [x] Variables, functions, files, etc. have appropriate and meaningful names.
- [x] Functions are small and serve a single purpose.
- [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

## Advanced Data Structures

### Hash Table ( using a LinkedList for collision chaining )

Maps keys to values, like a dictionary or a phone book. Or an object in JavaScript...

From [Wikipedia](https://en.wikipedia.org/wiki/Hash_table) [edited]:

> A data structure used to implement an associative array, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of _buckets_ or _slots_, from which the desired value can be found.

Collision Chaining: [Wikipedia](http://www.cs.rmit.edu.au/online/blackboard/chapter/05/documents/contribute/chapter/05/chaining.html)
>  Instead of storing the data directly inside the structure, have a linked list structure at each hash element. That way, all the collision, retrieval and deletion functions can be handled by the list, and the hash function's role is limited mainly to that of a guide to the algorithms, as to which hash element's list to operate on.

```javascript
const ht = new HashTable()
- [x] ht.put("name", "Zanzibar")  // adds a key-value pair to the hash table, deal with collisions using chaining
- [x] ht.get("name")              // returns the data associated with key.
- [x] ht.contains("name")         // returns true if the hash table contains the key.
- [x] ht.iterate((k, v) => console.log(`${k}: ${v}`)) // takes a callback function and passes it each key and value in sequence.
- [x] ht.remove("name")           // removes a key-value pair by key.
- [x] ht.size()                   // returns the number of key-value pairs in the hash table.
- [x] HashTable.hash("name")      // generates a hash for the key "name"
```

### Binary (Search) Tree

A sorted binary tree for fast lookup, addition and removal of items.

From [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree) [edited]:

> A particular type of container that allows fast lookup, addition and removal of items, and can be used to implement either dynamic sets of items, or lookup tables that allow finding an item by its key (e.g., finding the phone number of a person by name).
>
> Binary search trees keep their keys in sorted order, so that lookup and other operations can use the principle of binary search: when looking for a key in a tree (or a place to insert a new key), they traverse the tree from root to leaf, making comparisons to keys stored in the nodes of the tree and deciding, based on the comparison, to continue searching in the left or right subtrees.

```javascript
const bst = new BinarySearchTree()
- [x] bst.insert(3)  // inserts a node with the specified value into the tree.
- [x] bst.search(3)  // returns a node object or null if not found.
- [x] bst.remove(3)  // removes an value's node (if exists) from the tree.
- [x] bst.traverse((val) => console.log(val)) // traverse the tree using in-order traversal and apply function on each node's value.
- [x] bst.count()    // return the number of nodes in the tree.- [x]
```

#### Tree Node

To implement a _standard_ binary search tree, use a **tree node** data structure in your implementation. You don't need to write tests for this object or expose its interface in the public API. Use this interface as a reference:

```javascript
const leastNode = new TreeNode({data: 3})
const moreNode = new TreeNode({data: 10})
const midNode = new TreeNode({data: 7, left: leastNode, right: moreNode})

- [x] midNode.getData()           // returns the node's data
- [x] midNode.getLeft()           // returns the left node or null if none
- [x] midNode.setLeft(leastNode)  // changes the reference to the left node and returns the original node
- [x] midNode.getRight()          // returns the right node or null if none
- [x] midNode.setRight(moreNode)  // changes the reference to the right node and returns the original node
```

### Directed Graph

Nodes connected by vertices with a direction.

From [Wikipedia](https://en.wikipedia.org/wiki/Directed_graph) [edited]:

> A graph (that is a set of vertices connected by edges), where the edges have a direction associated with them.

```javascript
const diGraph = new DirectedGraph()
- [x] diGraph.addVertex('v1')               // adds a vertex to the graph.
- [x] diGraph.hasVertex('v1')               // returns true if the graph contains the vertex or false if not.
- [x] diGraph.addDirection('v1', 'v2')      // adds a direction from 'v1' to 'v2'.
- [x] diGraph.hasDirection('v1', 'v2')      // returns true if there's a direction from 'v1' to 'v2'.
- [x] diGraph.visit('v1', vertex => console.log(vertex)) // visit all the connected vertices in the graph starting with v1 and apply function on the reached vertex.
- [x] diGraph.findPaths('v1', 'v2')         // returns an array of all the paths between two vertices.
- [x] diGraph.removeDirection('v1', 'v2')   // removes an existing direction between 'v1' and 'v2'.
- [x] diGraph.getSeparatedVertices()        // returns an array of all the vertices that are unconnected to the graph (have no direction linking them to another vertex).
- [x] diGraph.removeVertex('v1')            // removes an existing vertex and all its directions (the incoming and outgoing).
- [x] diGraph.count()                       // returns the number of vertices in the graph.
```
### Sources

Most of the above was shamelessly borrowed from Wikipedia and these libraries:

- [datastructures-js](https://github.com/eyas-ranjous/datastructures-js)
- [singly-linked-list](https://www.npmjs.com/package/singly-linked-list)
