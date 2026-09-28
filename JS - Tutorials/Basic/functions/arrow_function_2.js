
let result = (first_number, second_number, third_number) =>  
        (first_number < 0 ? 0 : first_number)  +
        (second_number < 0 ? 0 : second_number)  +
        (third_number < 0 ? 0 : third_number); 


console.log(result(10,20,-30));
