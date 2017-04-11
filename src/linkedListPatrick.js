'use strict'

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this._length = 0
    this.head = null
    this.tail = null
  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    return this.tail
  }

  myContains(fruit) {
    let currentNode = this.head
    while(currentNode.next !== null){
      if(currentNode.element === fruit){
        return true
      }
      currentNode = currentNode.next
    }
    if(fruit === this.tail.element){
      return true
    }
    return false
  }

  find(fruit) {
    let currentNode = this.head
    while(currentNode.next !== null){
      if(currentNode.element === fruit){
        return currentNode.element
      }
      currentNode = currentNode.next
    }
    if(fruit === this.tail.element){
      return currentNode.data
    }
    return -1
    }

  insert(newElement) {
    this._length++
    let newNode = new Node(newElement), currentNode = this.head
    if( !currentNode ){
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    return this._length
  }

  insertFirst(fruit) {
    let newNode = new Node(fruit)
    this.head = newNode
  }

  insertBefore() {

  }

  insertAfter(fruit, newFruit) {
    // let newNode = new Node(newElement)
    // let current = this.find(item)
    // newNode.next = current.next
    // current.next = newNode

    // if(currentNode.element === fruit){
    //   this.next = newNode
    // }

    let newNode = new Node(newFruit), currentNode = this.head
    while(currentNode.element !== fruit){
      if(currentNode.element === fruit){
        newNode.next = currentNode.next
        currentNode.next = newNode
      }
      currentNode = currentNode.next
    }

  }

  remove() {

  }

  removeFirst() {
    this._length--
    let currentNode = this.head
    this.head = currentNode.next
    return this._length
  }

  isEmpty() {
    return this._length === 0
  }

  size() {
    return this._length
  }

  clear() {

  }
}



export { Node, LinkedList }
