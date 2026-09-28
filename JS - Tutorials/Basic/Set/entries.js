let set = new Set();

set.add(10);
set.add(20);
set.add(10);

console.log(set);

for(let [key, value] of set.entries())
    console.log(key, value);
     