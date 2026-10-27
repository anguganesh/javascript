/** Higher Order Function do anyone of below mentioned things
 *  1. Take another function as argument
 *  2. Returning the function 
 * 
 *  */

/**
 *  1. Taking another function as argument
 *  
 */

function printValues(nums, func) {
    for(let eachValue of nums) {
        func(eachValue)
    }
}

// declare function using function expression
let printInfo = function (value) {
    console.log(value);    
}

// declare function using Arrow function
let printData = (value) => console.log(value)

printValues([3,4,5,1], printInfo)
printValues([5,1,2,0,4], printData)



/**
 * 2. Returning the function 
 * 
 */

// Eg : 1

function multiply(firstValue) {
    return function (secondValue) {
        return firstValue * secondValue
    }
}

let returnFunction = multiply(10)
let result = returnFunction(13)
console.log(result);

// Eg 2
// convert multiply function into an Arrow Function

let calculation = (firstValue) => (secondValue) => firstValue * secondValue

let retFunc = calculation(10) // 10 is first Value
let finalResult = retFunc(20) // 20 is second Value
console.log(finalResult);


/**
 * 1. Take another function as argument
 * 2. Returning the function also
 * 
 */
// Eg 3 
function addAndMultiply(add, multiply) {
    return function (input) {
        let addValue = add(input)
        let result = multiply(addValue)
        return result
    }
}

let addOne = x => x + 1
let multiplyWithThree = x => x * 3

let outputFunction = addAndMultiply(addOne, multiplyWithThree)
let calOuput = outputFunction(10) 
console.log(calOuput);

