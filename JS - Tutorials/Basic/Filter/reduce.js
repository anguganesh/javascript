
numbers = [3,6,5,1,2];
empty_array = [];

summation = function(a,b) {
    return a + b;
}

let array_sum = numbers.reduce(summation);
console.log("Array Sum :", array_sum);


let addition = numbers.reduce((a,b) => summation(a,b), 0);
console.log("Arrow and Function Expression : ", addition);

addition = empty_array.reduce(function(a,b) {
    return a + b;
}, 0)
console.log(addition);


const number = [3, 6, 5, 1, 2];

const result = number.reduce((previousValue, currentValue, currentIndex, array) => {
  console.log(`Index: ${currentIndex}, Current Value: ${currentValue}, Previous Value: ${previousValue}`);
  console.log(array);
  
  // For demonstration, just sum the values
  return previousValue + currentValue;
}, 0);

console.log("Sum:", result);