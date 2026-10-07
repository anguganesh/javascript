// Object Creation Using Type Aliases

type Department = {
    id : Number
    name : string
    location : string
}

let dept_object : Department = {
    id : 123,
    name : "Computer Application",   
    location : "Chennai"
}

console.log(dept_object.id);
console.log(dept_object.name);
console.log(dept_object.location);
