

let data_array = ["Angu", 68, "Jaya", "Vishnu"];
console.log(data_array);


// push Method
data_array.push("push_method");
console.log(data_array);

//pop Method
data_array.pop();
console.log(data_array);

// shift Method
data_array.shift();
console.log(data_array);

// unshift Method
data_array.unshift("Angu","Ganesh");
console.log(data_array);

data_array.push(68);
console.log(data_array);
console.log(data_array.lastIndexOf(68));

console.log(data_array.splice(data_array.indexOf(68),1));
console.log(data_array);

console.log(data_array.indexOf(68));
data_array.splice(data_array.indexOf(68),1)
console.log(data_array);
//console.log(data_array.findIndex(68));

console.log();
data_array.unshift("Zebra");

console.log(data_array);
data_array.sort((a,b) => a.localeCompare(b) );
console.log(data_array);
data_array.sort((a,b) => b.localeCompare(a) );
console.log(data_array);
