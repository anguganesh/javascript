class Generic<NumType> {
    username : NumType
    add : (x : NumType, y: NumType) => NumType

    constructor(username: NumType, add : (x : NumType, y: NumType) => NumType) {
        this.username = username
        this.add = add
    }
}

let genericObject : Generic<number>  = new Generic<number>(10, (x, y) => x+y)
console.log(genericObject.add(10,5));
