
// IIFE (Immediately Invoked Function Expression)

// Function Expression
// result (variable name) act as function name
let result = function(a, b) {
    return a + b
}

// How to Call Function Expression
let sum = result(100,120)
console.log(sum);


// Replace result (variable name) with function
// syntax :
// (Anonymous Function)()
// so IIFE looks like as mentioned below

let summation = (function(a, b) {
                 return a + b
             })(10, 15);

console.log(summation);
