let array = new Array();

// push
array.push(10);
array.push(20);
array.push(30);

// Getting list of Indexes using keys method
for(let eachKey of array.keys()) {
    console.log(array.at(eachKey));
}






