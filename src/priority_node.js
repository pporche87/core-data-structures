export default class PriorityNode {
      constructor(data, priority){
        this.data = data
        this.next = undefined
        this.priority = priority

      }
  getData(data, priority) {
       // returns the data ("priorityNode") of the node
    return this.data
  }

  setNext(saladNode){
      // changes the reference to the next node and returns the original node
     this.next = saladNode
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
