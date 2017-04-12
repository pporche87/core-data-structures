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
    newNode.next = this.head
    this.head = newNode
  }

  insertBefore(newFruit, fruit) {
    let insertNode = new Node(newFruit)
    let currentNode = this.head
    if(this.size === 1){
      insertNode.next = this.head
      this.head = insertNode
    }
    while(currentNode){
      if(currentNode.next.element === fruit){
        insertNode.next = currentNode.next
        currentNode.next = insertNode
        return
      } else {
        currentNode = currentNode.next
      }
      if(currentNode === this.tail){
        return `${index} does not exist`
      }
    }
  }

  insertAfter(fruit, newFruit) {
    let insertNode = new Node(newFruit)
    let currentNode = this.head
    if(this._length === 1) {
      currentNode.next = insertNode
    }
    while(currentNode) {
      if(currentNode.element === fruit) {
        insertNode.next = currentNode.next
        currentNode.next = insertNode
        return
      } else {
        currentNode = currentNode.next
      }
      if(currentNode.next === this.tail){
        return `${fruit} does not exist`
      }
    }
    this._length++
  }

  remove() {
    let currentNode = this.head
    while(currentNode.next){
      if(currentNode.next === this.tail){
        currentNode.next = null
        this._length--
        return this._length
      }
      currentNode = currentNode.next
    }
    return this._length
  }

  removeFirst() {
    this._length--
    let currentNode = this.head
    this.head = currentNode.next
    return this._length
  }

  isEmpty() {
    if(this._length === 0){
      return true
  } else {
      return false
    }
  }

  mySize() {
    return this._length
  }

  clear() {
      this._length = 0
      this.head = null
      this.tail = null

      return this._length
  }
}



export { Node, LinkedList }
