
function functionOne(parameter: boolean | number) : boolean | number {
    return parameter
}


function functionTwo(parameter: any) : any {
    return parameter
}

function generiCType<Type>(parameter : Type) : Type {
    return parameter
}

function genericTypeNew<T>(parameter:T) : T {
    return parameter    
}

function genericTypeNewForm<T>(parameter: T): T {
    return parameter
}

let stringGenericType = genericTypeNew<string>("Test");
let numberGenericType = genericTypeNew<number>(10)
let booleanGenericType = genericTypeNewForm<boolean>(true)

// UserDefined Type
type StudentInformation = {
    studentName : string,
    studentId : number
}

let studentInfo : StudentInformation = {
    studentName : "Ganesh",
    studentId : 68
} 

let studentInfoData = genericTypeNewForm<StudentInformation>(studentInfo)


console.log(stringGenericType);
console.log(numberGenericType);
console.log(booleanGenericType);
console.log(studentInfoData);




