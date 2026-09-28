let map = new Map();

map.set("Angu", "Tester");
map.set("Jaya", "Entrepreneur");
map.set("Vishnu", "Student");


for(let [key, value] of map.entries())
    console.log(key, ":", value);
    