let name = "Angu Ganesh";

for(let eachChar of name) {
    console.log(eachChar);
}

let map = new Map();
map.set(1,"Angu");
map.set(2, "Jaya")

for(let eachKey of map.keys()){
    console.log(eachKey,":", map.get(eachKey));
}




