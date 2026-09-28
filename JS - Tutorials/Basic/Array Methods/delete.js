
let array = [5,8,10,7,9,11];
array.splice(array.indexOf(7),3,...[17,19,111])

console.log(array);


array.splice(0,0,100);
console.log(array);

array.splice(array.length-1,0,200);
console.log(array);

array.push(1000);
console.log(array);

console.log();
array.splice(Math.floor(array.length/2),1,0)
console.log(array);

let array_2 = [0,9,8];

let combine_array = [...array, ...array_2];
console.log(combine_array);
