export default class Set {
    constructor() {
        //constructs the set
        this.set = []
    }

    size() {
        //checks the length of the set
      return this.set.length
    }

    add(data) {
        //adds element into the set
        const match = this.set.find( (element) => element === data)
        if(!match) this.set.push(data)
    }

    contains(data) {
        //shows the contents of the set
        const match = this.set.find( (element) => element === data)
        if(!match) return false
        return true
    }

    isEmpty() {
        //checks if the set is empty
        if(this.set.length === 0) return true
        return false
    }

    remove(data) {
        const match = this.set.find( (element) => element === data)
        if(match) {this.set.remove(data)
        }
    }

    union(otherSet) {
        //unites two or more sets into one new set
        let newSet = this.set
        otherSet.forEach( (element)  => {
            const match = this.set.find( (data) => element === data)
            if(!match) this.set.push(element)
        })
        return newSet
    }

    // intersect(otherSet) {
            //finds the intersection between two sets e.g. [1, 2, 4]<this is the intersection [4] is the element contained in both sets>[4, 3, 8]
    //     let newSet = []
    //     otherSet.includes( (element) => {
    //         const match = this.set.find( data => element === data)
    //         if(match) newSet.push(element)
    //     })
    //
    //     return newSet
    // }

    clone() {
        //clones a set 
        let newSet = []
            this.set.forEach( (data) => {
                newSet.push(data)
            })
            return newSet
    }

}
