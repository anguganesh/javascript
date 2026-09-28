let array = new Array();

array[0]  = 100;
array[10] = 1000

console.log(array);


for(let keys in Object.keys(array)){
    console.log("keys :", keys ,array[Object.keys(array)[keys]]);
}

for(let keys of Object.keys(array)){
    console.log("keys :", keys ,array[keys]);
}

let array_2 = new Array();
array_2.push(10);
array_2.push(20);
array_2.push(30);
console.log(array_2);

for(let eachValue of Object.keys(array_2)) {
    console.log("test2",eachValue);
    
}

for(let eachValue_2 of array_2.values()) {
    console.log("test", eachValue_2);
    
}


for(let eachValue_3 of array_2) {
    console.log("test5", eachValue_3);
}

let array_3 = new Array();
array_3.push(100);
array_3.push(200);
array_3[4] = 400;

console.log(array_3);

for(let eachValue_in_array_3 in Object.keys(array_3)) {  
    console.log(array_3[Object.keys(array_3)[eachValue_in_array_3]]);
}
