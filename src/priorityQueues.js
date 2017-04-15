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

  enqueue(data, priority) {
    let myPriorityNode = new PriorityNode(data, priority)
    this.dataStore[this.counter++] = myPriorityNode
    return this.dataStore[this.counter - 1]
  }

  front(){
    if(this.dataStore.length === 0){
      return null
    } else {
      let max = this.dataStore[0].priority
      let maxIndex = 0

      for(var i = 0; i < this.dataStore.length; i++) {
        if(this.dataStore[i].priority > max) {
          max = this.dataStore[i].priority
          maxIndex = i
        }
      }
      return this.dataStore[maxIndex]
    }
  }

  myBack(){
    if(this.dataStore.length === 0){
      return null
    } else {
      let min = Infinity
      let minIndex = 0

      for(var i = 0; i < this.dataStore.length; i++) {
        if(this.dataStore[i].priority < min) {
          min = this.dataStore[i].priority
          minIndex = i
        }
      }
      return this.dataStore[minIndex]
    }
  }


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

  isEmpty() {
    if(this.dataStore.length === 0) {
      return true
    } else {
      return false
    }
  }

  myLength() {
    return this.dataStore.length
  }
}

export { PriorityNode, PriorityQueues }
