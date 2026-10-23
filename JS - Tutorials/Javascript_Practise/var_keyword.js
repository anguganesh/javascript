
// var keyword is the old way to declare variable
// scope : functional / local and global

const { sub } = require("date-fns")

// 1. Able to access variable only If it is Global Scope
// 2. NOT able to access functional / Local scope variable from Global scope Level (outside the function)

var x = 20    // Global scope

function print_y_value() {
    var y = 30               // functional / Local scope
    console.log(y)
}

print_y_value()
console.log(x)      // As x is declared globally, able to access
//console.log(y)    // As y is declared inside print_y_value() function, NOT able to accessible outside of the function

// 3. Re-Declaration can be done using var keyword without any compilation error. 

var browser = "chrome"
var browser = "edge"
console.log(browser);

// 4. Re-initialization can be done 

var browser = "safari"
browser = "firefox"
console.log(browser)

// 5. Default value of var variable is undefined

var test
console.log(test);

test = "new value"
console.log(test);

// 6. var keyword is Functional Scope, NOT a blocked scope
// As Var keyword is Functional scope, inside function we can NOT change the value

// i) As if condition is a block, NOT a function. So able to change the value of var variable.
// Able to change value of course from python to Javascript
var course = "python"

if(true) {
    var course = "Javascript"
}

console.log(course);

// ii) As modifySubject() is a function, So NOT able to change value of var variable
// So NOT able to change value of subject from Tamil to English

var subject = "Tamil"

function modifySubject() {
    var subject = "English"
    console.log(subject);    
}

modifySubject()
console.log(subject)



