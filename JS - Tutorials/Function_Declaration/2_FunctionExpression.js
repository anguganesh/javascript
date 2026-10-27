
// Function Expression


// Here multiply is the Function Name

// Syntax
// keyword variableName = Anonymous function

// Eg : 1
let multiply  = function(a, b) {
    return a * b
}

let result = multiply(10, 12)
console.log(result)

// Eg 2
let addition = function(...arrayData) {
    return arrayData.reduce((a, b) => a + b , 0)
}

let output = addition(1,2,3,4,5,12)
console.log(output);

