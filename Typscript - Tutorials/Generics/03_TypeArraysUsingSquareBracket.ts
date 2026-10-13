
function infoDetailsUsingArray<T>(products: T[]): T | undefined {
    // do some operations
    return products[products.length-1]
}
 

// Number Array
let result_3 = infoDetailsUsingArray<number>([1,2,9]);
console.log(result_3);
let result_empty_array = infoDetailsUsingArray<number>([]);
console.log(result_empty_array);

// String Array
let last_name_info = infoDetailsUsingArray<string>(["mahesh","vani","devi"]);
console.log(last_name_info);
let last_name_in_empty_array = infoDetailsUsingArray<string>([]);
console.log(last_name_in_empty_array);