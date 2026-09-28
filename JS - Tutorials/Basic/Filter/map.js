let numbers = [1,2,3,4,5];

let doubleData = function(inputData) {
                return inputData * 2;
              }


          
numbers.map((eachValue) => doubleData(eachValue))
       .forEach(eachValue => console.log(eachValue));

let odd_numbers_converted_to_even = numbers.filter(eachValue => eachValue %2 != 0)
                                           .map(eachValue => eachValue * 2);
console.log(odd_numbers_converted_to_even);

let output_array = [];
numbers.filter(eachValue => eachValue % 2 != 0)
       .forEach((eachValue, index, numbers) => output_array[index] = eachValue * 2);
console.log(output_array);


let person_details = [ {name:"John", age:23},
                       {name:"Angu", age:35},
                       {name:"Jaya", age:28}
                     ];

let age_array = person_details.map(eachData => eachData.age);
console.log(age_array);

let name = [];
person_details.forEach((eachData, index, value) => name[index] = eachData.name);
console.log(name);

let price_details = [10,100,200,321,500,90,70];
let price_array = new Array();
price_details.filter((eachPrice, index, price_details) => eachPrice < 100)
             .forEach(eachPrice => price_array.push(eachPrice));
console.log(price_array);

price_array = price_details.filter((eachPrice, index, price_details) => eachPrice < 100);
console.log(price_array);

let sum = price_array.reduce((previous_value, current_value, index, price_array) => previous_value + current_value);
console.log(sum);

