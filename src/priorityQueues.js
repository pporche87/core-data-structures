class PriorityNode {
  constructor(data, priority) {
    this.data = data
    this.priority = priority
  }
}

class PriorityQueues {
  constructor() {
    this.dataStore = []
    this.counter = 0
  }

  enqueue(data, priority){
    this.dataStore.push(data, priority)
    this.counter++
  }

  dequeue(){
    if(this.counter === 0){
      return null
    } else {
      return this.dataStore.shift()
      this.counter--
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
    return this.counter
  }

}

export { PriorityNode, PriorityQueues }
