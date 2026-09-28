

console.log(isOddOrEven(5));
console.log(isOddOrEven(6));

function isOddOrEven(num) {
    return num % 2 == 0;
}

let isEven = function(num) {
    return num % 2 == 0;
};

console.log(isEven(10));

let findSum = function arraySum(array) {
    //return array.reduce((a,b) => a + b);
    let sum = 0;
    for(let value of array)
        sum += value;
    return sum;
};

console.log(findSum([1,2,3,4,5]));


let findSumUsingArrow = array =>  array.reduce((a,b) => a + b);

console.log(findSumUsingArrow([1,2,3,4,5]));


let area_of_circle = radius => Math.pow(radius, 2) * Math.PI;
console.log(area_of_circle(5));

let product = 1;
let findProductAll = (...array) => array.reduce((a,b) => a*b);
console.log(findProductAll(1,2,3,4));
;




