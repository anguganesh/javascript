
function getProperty<Type, Key extends keyof Type>(object: Type, key : Key): Type[Key] {
    return object[key]
}

// let object : Map<string, number>  = new Map<string, number>();
// object.set("a",1)
// object.set("b",2);

let object = {"a":1, "b":2}
console.log(getProperty(object, "a"));
