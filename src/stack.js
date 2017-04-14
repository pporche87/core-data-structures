export default class Stack {
  constructor() {
      //constructs the stack
    this.dataStore = {}
    this.top = 0
  }

  myPush(element) {
      //pushes an element to the top of the stack
    this.dataStore[this.top++] = element
  }

  myPop() {
      //pops an element off of the stack
    if(this.top === 0){
      return null
    } else {
      this.top--
      return this.dataStore[this.top]
    }
  }

  peek() {
      //peeks into the stack
    if(this.top === 0){
      return null
    } else {
      return this.dataStore[this.top - 1]
    }
  }

  isEmpty() {
      //checks if stack is empty
    if(this.top === 0){
      return true
    } else {
      return false
    }
  }

  myLength() {
     //checks the length of the stack
    return this.top
  }

}
