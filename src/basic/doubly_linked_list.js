// class Node {
//   constructor(element, next = null, previous = null) {
//     this.element = element
//     this.next = next
//     this.previous = next
//   }
// }
//
// class DoublyLinkedList {
//   constructor() {
//     this._length = 0
//     this.head = null
//     this.tail = null
//   }
//
//   getHeadNode() {
//     return this.head
//   }
//
//   getTailNode() {
//     return this.tail
//   }
//
//   myContains(drank) {
//     let currentNode = this.head
//     while(currentNode.next !== null){
//       if(currentNode.element === drank){
//         return true
//       }
//       currentNode = currentNode.next
//     }
//     if(drank === this.tail.element){
//       return true
//     }
//     return false
//   }
//
//   find(drank) {
//     let currentNode = this.head
//     while(currentNode.next !== null){
//       if(currentNode.element === drank){
//         return currentNode.element
//       }
//       currentNode = currentNode.next
//     }
//     if(drank === this.tail.element){
//       return currentNode.data
//     }
//     return -1
//     }
//
//   insert(drank) {
//     this._length++
//     let newNode = new Node(drank), currentNode = this.head
//     if( !currentNode ){
//       this.head = newNode
//       this.tail = newNode
//     } else {
//       this.tail = newNode
//       newNode.previous = this.tail
//       this.tail = newNode
//     }
//     return this._length
//   }
//
//   insertFirst(drank) {
//     let newNode = new Node(drank)
//     newNode.previous = null
//     if(this._length === 0){
//       this.tail.next = newNode
//       newNode.previous = this.tail
//       this.tail = newNode
//     } else {
//       this.head = newNode
//       this.tail = newNode
//     }
//     this._length++
//     return this.head.element
//   }
//
//   myInsertBefore(thing, newThing) {
//     let currentNode = this.head,
//         newNode = new Node(newThing)
//     // if (!this._length) {
//     //   this.head = this.tail = newThing
//     // } else if (this._length === 1) {
//     //   newNode.next = this.head
//     //   this.head = newNode
//     // }
//     while (currentNode) {
//       if (currentNode.data === thing) {
//         newNode.next = currentNode
//         newNode.previous = currentNode.previous
//         currentNode.previous = newNode
//       }
//         currentNode = currentNode.next
//     }
//     this._length++
//   }
//
//   // insertAfter(drank, newDrank) {
//   //   this._length++
//   //   let currentNode = this.head
//   //   while(currentNode) {
//   //     if(currentNode.element === drank) {
//   //
//   //     }
//   //   }
//   //   if(this._length === 1) {
//   //     currentNode.next = insertNode
//   //   }
//   //   while(currentNode) {
//   //     if(currentNode.element === fruit) {
//   //       insertNode.next = currentNode.next
//   //       currentNode.next = insertNode
//   //       return
//   //     } else {
//   //       currentNode = currentNode.next
//   //     }
//   //     if(currentNode.next === this.tail){
//   //       return `${fruit} does not exist`
//   //     }
//   //   }
//   // }
//   //
//   // remove() {
//   //   let currentNode = this.head
//   //   while(currentNode.next){
//   //     if(currentNode.next === this.tail){
//   //       currentNode.next = null
//   //       this._length--
//   //       return this._length
//   //     }
//   //     currentNode = currentNode.next
//   //   }
//   //   return this._length
//   // }
//   //
//   // removeFirst() {
//   //   this._length--
//   //   let currentNode = this.head
//   //   this.head = currentNode.next
//   //   return this._length
//   // }
//   //
//   // isEmpty() {
//   //   if(this._length === 0){
//   //     return true
//   //   } else {
//   //     return false
//   //   }
//   // }
//
//   mySize() {
//     return this._length
//   }
//
//   clear() {
//     this._length = 0
//     this.head = null
//     this.tail = null
//     return this._length
//   }
// }
//
// export { Node, DoublyLinkedList }
