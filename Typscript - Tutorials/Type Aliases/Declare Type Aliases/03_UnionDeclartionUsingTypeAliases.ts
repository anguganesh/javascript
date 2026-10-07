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

let student_info_2 : StudentInfo = {
    id : 100,
    name : "Dhinesh"
}

console.log(student_info_1.id);
console.log(student_info_1.name);

console.log(student_info_2.id);
console.log(student_info_2.name);


