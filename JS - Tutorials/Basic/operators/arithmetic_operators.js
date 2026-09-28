let a = 10
let b = 20

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

// Type Coercion is working here
// true and false considered as 1 and 0 respectively

let c = true
let d = true
let e = false

console.log(c + d)
console.log(d + e)
console.log(d * e)

// pre and post increment
let f = 10
let g = f++
console.log(g) // 10
console.log(f) // 11

g = ++f
console.log(g) // 12
console.log(f) // 12