export default class Queues {
  constructor() {
    this.dataStore = []
    this._oldestIndex = 1
    this._newestIndex = 1
  }

  enqueue(element){
    this.dataStore[this._newestIndex] = element
    this._newestIndex++
    return this._newestIndex
  }

  dequeue(){
    if(this._oldestIndex === this._newestIndex){
      return null
    } else {
      let deletedData = this.dataStore[this._oldestIndex]

      delete this.dataStore[this._oldestIndex]
      this._oldestIndex++

      return deletedData
    }
  }

  front(){
    if(this._oldestIndex === this._newestIndex){
      return null
    } else {
      return this.dataStore[this._oldestIndex]
    }
  }

  myBack(){
    if(this._oldestIndex === this._newestIndex){
      return null
    } else {
      return this.dataStore[this._newestIndex - 1]
    }
  }

  isEmpty(){
    if(this._oldestIndex === this._newestIndex){
      return true
    } else {
      return false
    }
  }

  myLength(){
    return this._newestIndex - this._oldestIndex
  }
}
