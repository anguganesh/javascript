let map = new Map();

map.set("Angu", "Tester");
map.set("Jaya", "Entrepreneur");
map.set("Vishnu", "Student");

//map.forEach((value, key, map) => console.log(key, value));

let print = function(value, key, map) {
    console.log(key, ":", value);    
}

map.forEach(print)
map.forEach(print, this);
map.forEach(print, map);



let length = (value, key, map)  =>  console.log(key.length);
map.forEach(length)
map.forEach(length, this);
map.forEach(length, map);

