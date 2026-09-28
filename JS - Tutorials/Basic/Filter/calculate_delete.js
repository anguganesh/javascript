let array = [4,2,2,3,1,0,0,-1];

let non_duplicates = [];




array.filter((eachValue, index, array) => array.lastIndexOf(eachValue) === index)
     .forEach(eachValue => non_duplicates.push(eachValue))

console.log(non_duplicates);

let sum = non_duplicates.filter(eachValue => eachValue > 0)
              .reduce((a,b) => a + b);      
console.log(sum);









     





