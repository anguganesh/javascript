let map = new Map();
map.set("Angu", "Tester");
map.set("Jaya", "Entrepreneur");
map.set("Vishnu", "Student");

console.log(map);
 

for(let eachKey of map.keys())
    console.log(eachKey, map.get(eachKey));
    
for(let eachValue of map.values())
    console.log(eachValue);

for(let [eachKey, eachValue] of map.entries()) 
    console.log(eachKey, eachValue);

map.forEach((eachValue,eachKey) => console.log(eachKey, eachValue));
//map.keys().forEach(eachKey => console.log(eachKey, map.get(eachKey)));

console.log(map.keys());

for(let index in Array.from(map.keys()))
    console.log(Array.from(map.keys()).at(index), ":" ,map.get(Array.from(map.keys()).at(index)));
    
