// Creating Object in Literal Way

let alien = {};

console.log(alien);
console.log(typeof alien);


// Initialize the Object Properties

alien = {

                     name : "Angu",
            qualification : "MCA",
    "years of experience" : 14

};

// Retrieving the Object Property values

console.log(`Name is ${alien.name}`);
console.log(`Year of Experience is : ${alien["years of experience"]}`)

for(const property in alien) {
    console.log(property, ":", alien[property] )
}

