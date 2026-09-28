let alien = {

          name : "Angu",
    technology : "Javascript",
        laptop : {
                  ram : 4,
            processor : "16 GB",
                brand : "Asus"
        }
};

console.log("Alien is ", alien);
console.log("Laptop is ", alien?.laptop);
console.log(`brand is ${alien?.laptop?.brand}`);

// As laptop1 is NOT defined in alien object, So getting output as undefined instead of throwing error
console.log("Length of brand ", alien?.laptop1?.brand, " is", alien?.laptop1?.brand?.length);

if(alien?.laptop?.brand !== undefined)
    console.log("Length of brand", alien?.laptop?.brand, " is", alien?.laptop?.brand?.length);
        