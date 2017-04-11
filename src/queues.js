'use strict'

export default class Queues {
  constructor() {
    this.dataStore = []
    this.counter = 0
  }

  enqueue(element){
    this.dataStore.push(element)
    this.counter++
  }

  dequeue(){
    if(this.counter === 0){
      return null
    } else {
      return this.dataStore.shift()
    }
  }

  front(){
    if(this.counter === 0){
      return null
    } else {
      return this.dataStore[0]
    }
  }

  back(){
    if(this.counter === 0){
      return null
    } else {
      return this.dataStore[this.dataStore.length - 1]
    }
  }

  isEmpty(){
    if(this.counter === 0){
      return true
    } else {
      return false
    }
  }

  myLength(){

    // let lengthOfQueue = this.counter
    return this.counter
  }
}
