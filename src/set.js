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
        if(match) {this.set.remove(data)
        }
    }

    union(otherSet) {
        let newSet = this.set
        otherSet.forEach( (element)  => {
            const match = this.set.find( (data) => element === data)
            if(!match) this.set.push(element)
        })
        return newSet
    }

    // intersect(otherSet) {
    //     let newSet = []
    //     otherSet.includes( (element) => {
    //         const match = this.set.find( data => element === data)
    //         if(match) newSet.push(element)
    //     })
    //
    //     return newSet
    // }

    clone() {
        let newSet = []
            this.set.forEach( (data) => {
                newSet.push(data)
            })
            return newSet
    }

}
