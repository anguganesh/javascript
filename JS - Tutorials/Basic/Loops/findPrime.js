
let prime_number_list = new Array();
let input_number = 2;

for (let number = 2; number <= input_number; number++) {
    let is_prime = true;

    for (let index = 2; index <= Math.floor(Math.sqrt(number)); index++) {
    
        if(number % index === 0) {
            is_prime = false;
            break;
        }    
    }

    if(is_prime == true)
        prime_number_list.push(number)
}

console.log(prime_number_list);



    
    