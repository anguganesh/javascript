let alien = {
    name : "Angu",
    technology : "Javascript",
    laptop : {
        ram : 4,
        processor : "Core i7",
        brand : "Asus"
    }
};

Object.keys(alien).forEach(eachKey => console.log(eachKey, ":" , alien[eachKey]));

console.log("Alien Object Before Delete", alien);

delete alien.technology;
console.log("Alien Object After Delete technology property", alien);


delete alien?.laptop1?.brand;
console.log("Alien Object After Delete brand property", alien);

delete alien.laptop;
console.log("Alien Object After Delete Laptop object", alien);

delete alien.name;
console.log("After Delete Name property in Alien", alien)

alien = null;
console.log("Alien after Deletion", alien);

