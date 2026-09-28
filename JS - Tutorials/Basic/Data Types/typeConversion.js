let num = 6
let s
console.log(s, typeof s) // undefined undefined

s = String(num)
console.log(s, typeof s) // 6 string

s = Number(s)
console.log(s, typeof s) // 6 number

num = num + ""
console.log(num, typeof num) // 6 string

num = num - 2
console.log(num, typeof num) // 610 number

num = !num
console.log(num, typeof num) // false boolean

num = 0
num = !num
console.log(num, typeof num) // true boolean

string_value = String(10)
num = Number(string_value) + 10
console.log(num)

num = "123 Test"
console.log(Number(num))

console.log(parseInt(num))
console.log(parseInt("A123 Test"))