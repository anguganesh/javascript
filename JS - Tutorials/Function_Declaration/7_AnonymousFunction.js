// Anonymous Function : This is the function without function Name

// syntax
// ========
// function() {
//   function body 
// }

// We can use Anonymous function in 3 places
// 1. Function Expression
// 2. Callback function in Higher Order function (ie) filter(), map(), setTimeout()
// 3. Immediately Invoked Function Expression


// 3. Immediately Invoked Function Expression
// syntax
//  ( Anonymous Function )(); 

(function () {
    console.log("IIFE");
})();

// 1. Function Expression

let result = function(a, b) {
    console.log("Anonymous function with arguments");
    return a + b
}

let print = function() {
    console.log("Anonymous function without arguments");    
}

let sum = result(10, 12)
console.log(sum);

print()


// 2. Callback Function in Higher Order Function

function SetTimeOutFunction() {
    setTimeout(function ()  {
        console.log("Anonymous Function in Higher Order Function")
    }, 2000);
}

SetTimeOutFunction()