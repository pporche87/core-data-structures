'use strict'

export default class Node {
  costructor(data){
    this.data = data
    this.next = undefined
  }

  getData() {
    console.log('test this', this)
    console.log('testing', this.data)
    return this.data.data
  }
  // setNext(nodeB){
  //
  // }
  // getNext(){
  //
  // }
}
