let array = new Array();
console.log(typeof Array);
console.log(typeof array);

array.push(10);
array.push(20);
array[3] = 500;
console.log(array);


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);    
}

