"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const locale_1 = require("date-fns/locale");
let movieName = "VTV";
movieName = 23;
console.log(movieName);
let userDetails_1 = {
    name: "Angu",
    id: 123
};
userDetails_1 = {
    username: "aganesh",
    id: 123
};
function printStudentId(id) {
    console.log("User Id : ", id);
}
printStudentId(123);
printStudentId("test123");
let nummbersAndCharacters = [1, "test", "test2"];
let nummbersAndCharacters_2 = new Array();
nummbersAndCharacters_2.push("test");
nummbersAndCharacters_2.push(10);
console.log(nummbersAndCharacters_2);
let data = [1, "test", true, false];
console.log(data.values());
for (let value of data.values()) {
    console.log(value);
}
//# sourceMappingURL=myUnion.js.map