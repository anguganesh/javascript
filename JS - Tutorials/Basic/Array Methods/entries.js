let array = new Array();

// push
array.push(10);
array.push(20);
array.push(30);

for(const [key, value] of array.entries()) {
    console.log(`Key is ${key} and Value is ${value} `);
}

