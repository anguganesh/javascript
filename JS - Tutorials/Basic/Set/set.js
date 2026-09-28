let set = new Set("Dummy");
set.add(10);
set.add(20);
set.add(10);
set.add(30);
console.log(set);


// Iterate Using For of Loop
for(let eachValue of set.keys()) {
    console.log(eachValue);    
}

for(let eachValue of set) {
    console.log(eachValue);    
}

for(let [key, value] of set.entries()) {
    console.log(key, value);    
}

for(let eachValue of set.values()) {
    console.log("values : ",  eachValue);    
}

// Iterate Using For in Loop
for(let eachValue in Array.from(set)) {
    console.log(Array.from(set).at(eachValue));
}

set.add()