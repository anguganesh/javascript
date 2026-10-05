"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello Typescript");
let name = "Angu";
console.log(name);
let rollNumber = 68;
console.log(rollNumber);
let isLogged = true;
let isLoggedIn = false;
let test = "test";
console.log(test);
let userDetails = { name: "Angu Ganesh", qualification: "MCA" };
let userName = userDetails === null || userDetails === void 0 ? void 0 : userDetails.name;
let qualification = userDetails === null || userDetails === void 0 ? void 0 : userDetails.qualification;
//let notExist = userDetails.notExist;
console.log(userName);
console.log(qualification);
//console.log(notExist);
// Arrow Function
let result = (name) => name.toUpperCase();
console.log("Result is : ", result("Ganesh"));
let arrays = new Array("Dhinesh", "Ganesh");
console.log(arrays);
let capsArrayDetails = arrays.map(eachValue => eachValue.toUpperCase());
console.log(capsArrayDetails);
let length_of_each_words = arrays.map((eachValue) => eachValue.length);
console.log(length_of_each_words);
function greeter(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function addTwo(first, second) {
    return first + second;
}
console.log(addTwo(3, 4));
function addThree(a, b, c = 10) {
    return a + b + c;
}
console.log(addThree(1, 3, 5));
let sum = (a, b, c = 10) => a + b + c;
console.log(sum(1, 2, 12));
let upper = (name) => name.toUpperCase();
console.log(upper("Angu ganesh"));
function consoleError(errorMsg) {
    console.log(errorMsg);
}
function consoleErrorMessage(errorMsg) {
    throw new Error(errorMsg);
}
consoleError("Error Message");
consoleErrorMessage("Error Message");
//# sourceMappingURL=intro.js.map