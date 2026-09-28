let map = new Map();

map.set("Angu", "Tester");
map.set("Jaya", "Entrepreneur");
map.set("Vishnu", "Student");

console.log(map.keys());

for(let eachKey of map.keys()) 
    console.log(eachKey);
 
for(let index in Array.from(map.keys())) {
    let eachKey = Array.from(map.keys()).at(index);
    let eachValue = map.get(Array.from(map.keys()).at(index));
    console.log(eachKey, ":", eachValue);
}


    
    