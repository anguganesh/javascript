let set = new Set();

set.add(10);
set.add(20);
set.add(10);

console.log(set);

let print = function(eachValue) {
    console.log(eachValue);
};

set.forEach(eachValue => console.log(eachValue), this);
set.forEach(print, this);
set.forEach(print);
