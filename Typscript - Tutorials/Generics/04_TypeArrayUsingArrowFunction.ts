

let finalData = <T>(products: T[]): T | undefined => {
    // do some operations
    return products[products.length-1]
}
 

let arrowFunctionResult = finalData([]);
console.log(arrowFunctionResult);
