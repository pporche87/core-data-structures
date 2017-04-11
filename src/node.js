'use strict'

export default class Node {
  constructor(data){
    this.data = data
    this.next = undefined 
  }

  getData() {
    return this.data
  }
  setNext(nodeB){
     this.next = nodeB
     return this
  }
  getNext(nextNode){
      if (nextNode === undefined) {
        return null
      } else {
        return this.next
      }
  }
}
