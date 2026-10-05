"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser({ name, age, email = "default@gmail.com" }) {
    console.log(name);
    console.log(age);
    console.log(email);
}
let ObjectData = {
    age: 20,
    name: "Ganesh",
    email: "test@gmail.com"
};
createUser(ObjectData);
let userDetails = {
    name: "Angu",
    age: 30,
    email: "test@gmail.com",
    location: "Chennai"
};
createUser(userDetails);
let userDetails_2 = {
    name: "Jaya",
    age: 27,
    email: "jayavasu25@gmail.com",
    location: "Chennai"
};
//createUser({name : "Angu", age:30, email:"test@gmail.com",location:"Chennai"})
createUser(userDetails_2);
//# sourceMappingURL=object.js.map