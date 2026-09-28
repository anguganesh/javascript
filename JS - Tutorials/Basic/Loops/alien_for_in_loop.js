let alien = {
    name : "Angu",
    tech : "JavaScript"
}

for(let property in alien) {
    console.log(property, ":", alien[property]);
}

for (let property of Object.keys(alien)) {
    console.log(property, ":", alien[property]);
}


for (let property in Object.keys(alien)) {
    console.log(property);
}