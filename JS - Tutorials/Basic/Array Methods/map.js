let array  = new Array();

array.push(10);
array.push(20);

let new_array = new Array();
array.map(eachValue => new_array.push(eachValue * 2));
console.log(new_array);




