# Core Data Structures
#TEAM: Patrick Porche and Aisha Ortiz
#TEAM NAME: Jobless Sambar

Tests and implementations for common data structures. See the full list in the [data-structures.md](data-structures.md) file.

Base repository for the [Core Data Structures](http://jsdev.learnersguild.org/goals/128) goal.

## Installation and Setup

For this project, we created both tests and implementations of core data structures. Begin with installing your dependencies from the package.json file.

Check for mocha and chai in your .json file. If not already provided, use the link below to install.

[jsdoc]: http://usejsdoc.org/
[npm]: https://www.npmjs.com/
[npm-documentation]: https://www.npmjs.com/package/documentation
[babel]: https://babeljs.io/blog/2015/10/31/setting-up-babel-6
[mocha]: https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha

Use `npm install` in order to install all dependencies.

## Usage and Examples

This is the dequeue function in our priorityQueues.js file, it removes and element from the front of a queue.

```
dequeue() {
  if(this.dataStore.length === 0) {
    return null
  } else {
    this.counter--

    let deletedData = this.front()
    let deletedIndex = this.dataStore.indexOf(deletedData)
    this.dataStore.splice(deletedIndex, 1)

    return deletedData
  }
}
```
This is the dequeue test function in our priorityQueuesTest.js file, it checks to see if the data returned matches the data that was removed from the front of a queue.  
```
context('dequeue()', () => {
  it('returns and removes the front element in the queue or null if the queue is empty.', () => {
    const myQueue = new PriorityQueues()
    expect(myQueue.dequeue() ).to.equal(null)

    myQueue.enqueue('grindr', 50)
    myQueue.enqueue('daddyhunt', 200)
    myQueue.enqueue('manhunt', 200)
    myQueue.enqueue('her', 100)
    myQueue.enqueue('bumble', 150)

    expect(myQueue.dequeue().data ).to.equal('daddyhunt')
    expect(myQueue.dequeue().priority ).to.equal(200)
  })
})
```
This is the Set function in our set.js file, it unites two sets into one new set.
```
union(otherSet) {
    let newSet = this.set
    otherSet.forEach( (element)  => {
        const match = this.set.find( (data) => element === data)
        if(!match) this.set.push(element)
    })
    return newSet
}
```
This is the Set test function in our set_test.js file, it checks sets and unions the set with another set and returns the resulting set.  

```
context('union', () => {
    it('unions the set with another set and returns the resulting set', () => {
        set.add('A')
        expect(set.union(['1', '2', '3', '1'])).to.eql(['A', '1', '2', '3'])
    })
})
```
# Core Data Structures - 80% Complete (Basic)

[Basic](#basic-data-structures) | [Advanced](#advanced-data-structures)

## Basic Data Structures

### Node

A very basic data structure that can contain some value and a reference to another node. Used as a building block for many other data structures.

```javascript
const nodeA = new Node({data: "apple"})
const nodeB = new Node({data: "banana"})

[X] nodeA.getData()       // returns the data ("apple") of the node
[X] nodeA.setNext(nodeB)  // changes the reference to the next node and returns the original node
[X] nodeA.getNext()       // returns the next node, or null if no next node
```

### Linked List ( using Nodes )

A list of [nodes](#node) that link to each other, like a daisy-chain.

From [Wikipedia](https://en.wikipedia.org/wiki/Linked_list) [edited]:

> A linear collection of data elements, called nodes, each pointing to the next node by means of a pointer. It is a data structure consisting of a group of nodes which together represent a sequence.

Specifically, the following is a _singly-linked_ list (as opposed to a [doubly-linked list](#doubly-linked-list-using-double-nodes)).

```javascript
const linkedList = new LinkedList()
[X] linkedList.getHeadNode()           // Returns the first node in the list
[X] linkedList.getTailNode()           // Returns the last node in the list
[X] linkedList.contains("bananas")     // Determines whether or not the list contains the provided data
[X] linkedList.find("bananas")         // Returns the first node containing the provided data, or -1 if not found
[X] linkedList.insert("bananas")       // Inserts a node (with the provided data) to the tail of the list
[X] linkedList.insertFirst("bananas")  // Inserts a node (with the provided data) to the head of the list
[X] linkedList.insertBefore("bananas", "apples") // Inserts a node (with data "apples") before the first node containing "bananas"
[X] linkedList.insertAfter("apples", "bananas")  // Inserts a node (with data "bananas") after the first node containing "apples"
[X] linkedList.remove()                // Removes the tail node from the list
[X] linkedList.removeFirst()           // Removes the head node from the list
[X] linkedList.isEmpty()               // Determines if the list is empty or not
[X] linkedList.size()                  // Returns the size of the list (number of nodes)
[X] linkedList.clear()                 // Clears the list of all nodes/data
```

### Stack ( using Nodes )

The classic LIFO (Last-In-First-Out) one-dimensional list.

From [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) [edited]:

> An abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed. The order in which elements come off a stack gives rise to its alternative name, LIFO (for last in, first out). Additionally, a peek operation may give access to the top without modifying the stack.

```javascript
const stack = new Stack()
[X] stack.push("foo") // push an element (the string "foo") to the top of the stack.
[X] stack.pop()       // returns and removes the top element in the stack or null if the stack is empty.
[X] stack.peek()      // returns the top element in the stack or null if the stack is empty.
[X] stack.isEmpty()   // returns true if the stack is empty or false if not.
[X] stack.length()    // returns the number of elements in the stack.
```

To implement a _standard_ stack, use the [Node](#node) data structure in your implementation.

### Queue ( using Nodes )

The classic FIFO (First-In-First-Out) one-dimensional list.

From [Wikipedia](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) [edited]:

> A particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principal (or only) operations on the collection are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue.

```javascript
const queue = new Queue()
[X] queue.enqueue("foo") // adds an element (the string "foo") to the back of the queue.
[X] queue.dequeue()      // returns and removes the front element in the queue or null if the queue is empty.
[X] queue.front()        // returns the front element in queue or null if the queue is empty.
[X] queue.back()         // returns the back element in the queue or null if the queue is empty.
[X] queue.isEmpty()      // returns true if the queue is empty or false if not.
[X] queue.length()       // returns the number of elements in the queue
```

To implement a _standard_ queue, use the [Node](#node) data structure in your implementation.

### Priority Queue ( using Priority Nodes )

Like a queue, but with _priorities_.

From [Wikipedia](https://en.wikipedia.org/wiki/Priority_queue) [edited]:

> An abstract data type which is like a regular queue or stack data structure, but where additionally each element has a "priority" associated with it. An element with high priority is served before an element with low priority. If two elements have the same priority, they are served according to their order in the queue.

```javascript
const pQueue = new PriorityQueue()
[X] pQueue.enqueue("pizza", 100) // adds an element with priority (number) to the back of the queue.
[X] pQueue.front()               // returns the front element (highest priority) in the queue or null if the queue is empty.
[X] pQueue.back()                // returns the back element (lowest priority) in the queue or null if the queue is empty.
[X] pQueue.dequeue()             // returns and removes the front element (highest priority) in the queue or null if the queue is empty.
[X] pQueue.isEmpty()             // returns true if the queue is empty or false if not.
[X] pQueue.length()              // returns the number of elements in the queue.
```

#### Priority Node

To implement a _standard_ priority queue, use a **priority node** data structure in your implementation. You don't need to write tests for this object or expose its interface in the public API. Use this interface as a reference:

```javascript
const pizzaNode = new PriorityNode({data: "pizza", priority: 100})
const saladNode = new PriorityNode({data: "salad", priority: 50})

pizzaNode.getData()           // returns the node's data
pizzaNode.getPriority()       // returns the node's priority
pizzaNode.setPriority(200)    // changes the node's priority and returns the node
pizzaNode.setNext(saladNode)  // changes the reference to the next node and returns the original node
pizzaNode.getNext()           // returns the next node or null if none
```

### Doubly-Linked List ( using Double Nodes )
[X] Doubly-Linked List
The interface for the Doubly-Linked List is the same as the Linked List above, _except_ that it uses a double-link node (see below).

From [Wikipedia](https://en.wikipedia.org/wiki/Doubly_linked_list) [edited]:

> A linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called _links_, that are references to the previous and to the next node in the sequence of nodes.

#### Double Node

 To implement a _standard_ doubly-linked list, use a **double node** data structure in your implementation.

This is the same as the [Node](#node) data structure, except that it also has the methods `.getPrevious()` and `.setPrevious(<DoubleNode>)`. These methods get and set the previous `DoubleNode` in the list.

### Set

Collection of things, without repetition.

From [Wikipedia](https://en.wikipedia.org/wiki/Set_(abstract_data_type)) [edited]:

> An abstract data type that can store certain values, without any particular order, and no repeated values. It is a computer implementation of the mathematical concept of a finite set. Unlike most other collection types, rather than retrieving a specific element from a set, one typically tests a value for membership in a set.

```javascript
const set      = new Set(['A', 'B', 'C'])
const otherSet = new Set(['B', 'C', 'E'])
[X] set.add('D')             // adds an element to the set.
[X] set.isEmpty()            // returns true if the set is empty or false if not.
[X] set.contains('B')        // returns true the set contains the element or false if not.
[X] set.remove('C')          // removes an element (if it exists) from the set.
[X] set.forEach(elem => console.log(elem))  // takes a callback function and passes it each element in sequence.
[X] set.size()               // returns the number of elements in the set.
[X] set.union(otherSet)      // unions the set with another set and returns the resulting set.
[ ] set.intersect(otherSet)  // intersects the set with another set and returns the resulting set.  
[ ] set.difference(otherSet) // returns a set that contains the elements found in the set but not in otherSet.
[ ] set.isSubset(otherSet)   // returns true if the set is a subset of otherSet or false if not.
[X] set.clone()              // returns a cloned set.
```

## Advanced Data Structures

### Hash Table ( using a LinkedList for collision chaining )

Maps keys to values, like a dictionary or a phone book. Or an object in JavaScript...

From [Wikipedia](https://en.wikipedia.org/wiki/Hash_table) [edited]:

> A data structure used to implement an associative array, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of _buckets_ or _slots_, from which the desired value can be found.

Collision Chaining: [Wikipedia](http://www.cs.rmit.edu.au/online/blackboard/chapter/05/documents/contribute/chapter/05/chaining.html)
>  Instead of storing the data directly inside the structure, have a linked list structure at each hash element. That way, all the collision, retrieval and deletion functions can be handled by the list, and the hash function's role is limited mainly to that of a guide to the algorithms, as to which hash element's list to operate on.

```javascript
const ht = new HashTable()
ht.put("name", "Zanzibar")  // adds a key-value pair to the hash table, deal with collisions using chaining
ht.get("name")              // returns the data associated with key.
ht.contains("name")         // returns true if the hash table contains the key.
ht.iterate((k, v) => console.log(`${k}: ${v}`)) // takes a callback function and passes it each key and value in sequence.
ht.remove("name")           // removes a key-value pair by key.
ht.size()                   // returns the number of key-value pairs in the hash table.
HashTable.hash("name")      // generates a hash for the key "name"
```

### Binary (Search) Tree

A sorted binary tree for fast lookup, addition and removal of items.

From [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree) [edited]:

> A particular type of container that allows fast lookup, addition and removal of items, and can be used to implement either dynamic sets of items, or lookup tables that allow finding an item by its key (e.g., finding the phone number of a person by name).
>
> Binary search trees keep their keys in sorted order, so that lookup and other operations can use the principle of binary search: when looking for a key in a tree (or a place to insert a new key), they traverse the tree from root to leaf, making comparisons to keys stored in the nodes of the tree and deciding, based on the comparison, to continue searching in the left or right subtrees.

```javascript
const bst = new BinarySearchTree()
bst.insert(3)  // inserts a node with the specified value into the tree.
bst.search(3)  // returns a node object or null if not found.
bst.remove(3)  // removes an value's node (if exists) from the tree.
bst.traverse((val) => console.log(val)) // traverse the tree using in-order traversal and apply function on each node's value.
bst.count()    // return the number of nodes in the tree.
```

#### Tree Node

To implement a _standard_ binary search tree, use a **tree node** data structure in your implementation. You don't need to write tests for this object or expose its interface in the public API. Use this interface as a reference:

```javascript
const leastNode = new TreeNode({data: 3})
const moreNode = new TreeNode({data: 10})
const midNode = new TreeNode({data: 7, left: leastNode, right: moreNode})

midNode.getData()           // returns the node's data
midNode.getLeft()           // returns the left node or null if none
midNode.setLeft(leastNode)  // changes the reference to the left node and returns the original node
midNode.getRight()          // returns the right node or null if none
midNode.setRight(moreNode)  // changes the reference to the right node and returns the original node
```

### Directed Graph

Nodes connected by vertices with a direction.

From [Wikipedia](https://en.wikipedia.org/wiki/Directed_graph) [edited]:

> A graph (that is a set of vertices connected by edges), where the edges have a direction associated with them.

```javascript
const diGraph = new DirectedGraph()
diGraph.addVertex('v1')               // adds a vertex to the graph.
diGraph.hasVertex('v1')               // returns true if the graph contains the vertex or false if not.
diGraph.addDirection('v1', 'v2')      // adds a direction from 'v1' to 'v2'.
diGraph.hasDirection('v1', 'v2')      // returns true if there's a direction from 'v1' to 'v2'.
diGraph.visit('v1', vertex => console.log(vertex)) // visit all the connected vertices in the graph starting with v1 and apply function on the reached vertex.
diGraph.findPaths('v1', 'v2')         // returns an array of all the paths between two vertices.
diGraph.removeDirection('v1', 'v2')   // removes an existing direction between 'v1' and 'v2'.
diGraph.getSeparatedVertices()        // returns an array of all the vertices that are unconnected to the graph (have no direction linking them to another vertex).
diGraph.removeVertex('v1')            // removes an existing vertex and all its directions (the incoming and outgoing).
diGraph.count()                       // returns the number of vertices in the graph.
```

### Sources

Most of the above was shamelessly borrowed from Wikipedia and these libraries:

- [datastructures-js](https://github.com/eyas-ranjous/datastructures-js)
- [singly-linked-list](https://www.npmjs.com/package/singly-linked-list)
