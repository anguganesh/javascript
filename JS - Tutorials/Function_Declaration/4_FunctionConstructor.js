
// Function Constructor used to create new function along with new keyword
// syntax
// new_keyword Function("arg 1","arg 2",....,"arg n-1", "arg n", "Function Body")


let func = new Function("x", "y", "return x * y")
console.log(func(10,20));


