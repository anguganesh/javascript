let names = ["Angu","Jaya","Vishnu"];

for (let index = 0; index < names.length; index++) {
    const each_name = names[index];
    console.log(each_name);    
}

console.log();
console.log(names.includes("Angu"));

console.log();
names.forEach(eachValue => console.log(eachValue));

console.log();
console.log(names.toReversed());

console.log();
console.log(names);
