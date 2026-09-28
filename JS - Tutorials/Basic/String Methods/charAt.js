let full_name = "Angu Ganesh";

for(let eachChar in full_name) {
    console.log(full_name.charAt(eachChar));    
}

// Negative Indexing is NOT allowed in charAt Method
console.log("Negative Index Value : ",full_name.charAt(-1));
