let array = new Array();

array.push(10);
array.push(20);
array.push(30);

console.log(array);

// splice() method is Mutable
// splice() method 
// splice(start, delete_count, item_1, item_2, ... item_N to add at start index)
array.splice()
console.log(array);

// add element to array
array.splice(1, 0, 68);
console.log(array);

// remove element from array
let index = array.findLastIndex(eachValue => eachValue == 68);
console.log("Index : ", index);
array.splice(index, 1)
console.log(array);

// replace element in array
array.splice(1, 1, 2);
console.log(array);
