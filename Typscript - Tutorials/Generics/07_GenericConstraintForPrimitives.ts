

function genericPrimitives<T extends number | string | boolean>(parameter : T): T {
    return parameter;
}

// Call the Function with Type
let stringOutput = genericPrimitives<string>("ganesh");
let numberOutput = genericPrimitives<number>(10)
let booleanOutput = genericPrimitives<boolean>(true)


console.log(stringOutput);
console.log(numberOutput);
console.log(booleanOutput);

// Call the function without Type
stringOutput = genericPrimitives("Dhinesh");
numberOutput = genericPrimitives(50)
booleanOutput = genericPrimitives(false)

console.log(stringOutput);
console.log(numberOutput);
console.log(booleanOutput);




