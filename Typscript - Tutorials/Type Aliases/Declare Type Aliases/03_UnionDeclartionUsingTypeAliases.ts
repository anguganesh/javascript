// Declare Union DataType using Type Aliases
type Union = string | number

type StudentInfo = {
    id : Union,
    name: string
}

let student_info_1 : StudentInfo = {
    id : "xyz123",
    name : "ganesh"
}

console.log(student_info_1.id);
console.log(student_info_1.name);
