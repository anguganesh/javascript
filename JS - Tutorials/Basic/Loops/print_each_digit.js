
let input_number = 1234
let output = "";

for (;input_number > 0;) {
    let each_digit = input_number % 10;
    input_number = Math.floor(input_number / 10);
    output+=each_digit;
    
}

console.log(output); 

input_number = 1234
let total = 0;

for (;input_number > 0;) {
    let each_value = input_number % 10;
    total = total * 10 + each_value;
    input_number = Math.floor(input_number / 10);        
}

console.log(total);
