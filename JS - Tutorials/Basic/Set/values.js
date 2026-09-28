let set = new Set();
set.add(10);
set.add(20);
set.add(10);
set.add(30);

for(let eachValue of set.values())
    console.log(eachValue);

for(let eachValue of set)
    console.log(eachValue);
    