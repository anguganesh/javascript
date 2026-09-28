
let alien = {
    name : "Angu",
    qualification : "MCA",
    phone : {
        brand : "POCO",
        processor : "core i5",
        ram : "16 GB"
    }
};

console.log("Alien Object : ", alien);
console.log("Phone Object : ", alien?.phone1?.brand);

console.log(Object.keys(alien.phone));

// Retrieve Properties from phone object using for loop
for (let index = 0; index < Object.keys(alien.phone).length; index++) {
    const each_attribute = Object.keys(alien.phone)[index];
    console.log(each_attribute, ":", alien.phone[each_attribute]);
}

// Retrieve Properties from phone object using for in loop
for (let key in alien.phone ) {
    console.log(key, ":", alien.phone[key]);
}

console.log(alien.phone);

