

function factorial(num) {
    return num===0 ? 1 : num * factorial(num-1)
}

//console.log(factorial(5));

let factFunction = (num) => num===0 ? 1 : num * factFunction(num-1)

console.log(factFunction(5));

