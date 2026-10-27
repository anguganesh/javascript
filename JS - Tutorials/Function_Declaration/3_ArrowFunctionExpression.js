
function summation(a, b, c) {
    return a + b + c
}

/**
 * Here convert the Function Declaration as an Arrow Function
 * Rules to convert function declaration as an Arrow Function
 * 
 * 1. No need of function keyword
 * 2. Function Name is NOT required
 * 3. Requires only parameter and Function body
 * 4. To connect parameter and Function body, we used Arrow Symbol (=>)
 */

summation = (a, b, c) => {  console.log("Arrow Function")
    return a + b + c }
console.log(summation(10, 20, 40));

// As we have only one line, we can avoid {} and return keyword

summation = (a, b, c) => a + b + c
console.log(summation(34,45,67));

// Eventhough we declare same function multiple times, Latest function declaration will have higher priority
// Arrow Function is also an Anonymous Function
