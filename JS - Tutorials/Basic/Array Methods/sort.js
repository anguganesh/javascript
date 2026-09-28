let array = new Array();

// push
array.push(50);
array.push(40);
array.push(80);

let ascending = function(a,b) {
    return a - b;
}

let descending = function(a,b) {
    return b - a;
}


// sort array in ascending order
//array.sort((a,b) => a - b);
array.sort(ascending);
console.log("Ascending Order", array);

// sort array in descending order
//array.sort((a,b) => b - a);
array.sort(descending);
console.log("Descending Order", array);
