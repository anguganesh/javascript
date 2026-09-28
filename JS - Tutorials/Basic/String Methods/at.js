let full_name = "Angu Ganesh";

for(let eachChar in full_name) {
    console.log(full_name.at(eachChar));    
}

// Negative Indexing allowed in at method
console.log("Negative Index Value : ", full_name.at(-1));
