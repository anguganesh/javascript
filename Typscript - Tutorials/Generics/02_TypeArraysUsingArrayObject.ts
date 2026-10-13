
function infoDetails<T>(products: Array<T>): T | undefined  {
    // do some operations
    return products[products.length-1];
}

// For Number Array
let result = infoDetails<number>([1,2,4,5]);
console.log(result);
let result_2 = infoDetails<number>([]);
console.log(result_2);

// For String Array
let lastname = infoDetails<string>(["angu","ganesh"]);
console.log(lastname);
let lastname_2 = infoDetails<string>([]);
console.log(lastname_2);




let finalData = <T>(products: T[]): T | undefined => {
    // do some operations
    return products[products.length-1]
}
 

let arrowFunctionResult = finalData([]);
console.log(arrowFunctionResult);
