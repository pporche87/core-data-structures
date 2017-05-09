export default class Node {
  constructor(data){
    this.data = data
    this.next = undefined
  }

  getData() {
       // returns the data ("apple") of the node
    return this.data
  }

  setNext(nodeB){
      // changes the reference to the next node and returns the original node
     this.next = nodeB
     return this
  }

  getNext(nextNode){
      // returns the next node, or null if no next node
      if (nextNode === undefined) {
        return null
      } else {
        return this.next
      }
  }

}
