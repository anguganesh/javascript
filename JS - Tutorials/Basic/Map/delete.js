let map = new Map();

map.set("Angu", "Tester");
map.set("Jaya", "Entrepreneur");
map.set("Vishnu", "Student");

console.log(map);

for(let eachKey of map.keys()) {
  //  map.delete(eachKey);
}

map.delete("Test");
console.log(map);

