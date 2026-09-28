let set = new Set();
set.add(10);
set.add(20);
set.add(10);
set.add(30);

console.log(set);

let isExist = set.has(10);
console.log(isExist);

isExist = set.has(100);
console.log(isExist);

