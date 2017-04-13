export default class Set {
    constructor() {
        this.set = []

    }
    size() {
      return this.set.length
    }

    add(data) {
        const match = this.set.find( (element) => element === data)
        if(!match) this.set.push(data)
    }

    contains(data) {
        const match = this.set.find( (element) => element === data)
        if(!match) return false
        return true
    }

    isEmpty() {
        if(this.set.length === 0) return true
        return false
    }

    remove(data) {
        const match = this.set.find( (element) => element === data)
        if(match) {
            this.set.remove(data)
        }
    }

    // union(otherSet) {
    //
    // }

//takes a callback function and passes it each element in sequence
    // forEach(element) => {
    //
    //     console.log('hello world');
    // }

    // clone(data) {
    //
    //     }
    // }
}





// const set = new Set()
// set.add(9)
// console.log(set.forEach(9));
