/**
 * Multiple Ways we can declare function
 * 
 * 1. Function Declaration
 * 2. Anonymous Function - can be used in below forms
 *      i) Function Expression
 *     ii) Callback function
 *    iii) IIFE
 * 3. Arrow Function - can be used in below forms
 *      i) Function Expression
 *     ii) Callback function
 *    iii) IIFE
 * 4. Function Constructor
 * 5. Generator Function 
 * 6. Higher Order Function
 * 7. Recursive Function 
 *  */

function add(a, b) {
    return a + b
}

console.log(add(3,4));
console.log(add(4,6))


function printMessage() {
    console.log("This is Javascript Function");    
}

printMessage()