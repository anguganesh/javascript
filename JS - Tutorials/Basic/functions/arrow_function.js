
// Doing Summation using Function Expression
let total = function(first_number, second_number) {
    return first_number + second_number;
}

let sum = total(10,12);
console.log("Sum is", sum);


// Doing Summation using Arrow Function
let sum_using_arrow_function = (first_number, second_number) => {
    return first_number + second_number;
}


let result = sum_using_arrow_function(20,43);
console.log("Sum is", result);

// Doing Summation using Arrow Function with single statement
let arrow_with_single_statement = (first_number, second_number) =>  first_number + second_number;

result = arrow_with_single_statement(20,46);
console.log("Sum is", result);


