 export default class Stack {
  constructor() {
    this.dataStore = []
    this.top = 0
  }

  myPush(element) {
    this.dataStore[this.top++] = element
  }

  myPop() {
    if(this.top === 0){
      return null
    } else {
      return this.dataStore[this.top--]
    }
  }

  peek() {
    if(this.top === 0){
      return null
    } else {
      return this.dataStore[this.top - 1]
    }
  }

  isEmpty() {
    if(this.top === 0){
      return true
    } else {
      return false
    }
  }

  myLength() {
    return this.top
  }

}
