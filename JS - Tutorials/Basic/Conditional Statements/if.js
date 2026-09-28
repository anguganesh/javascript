let number_of_months = 6;
let principal = 10000;
let total_amount;

if(number_of_months <= 2)
    total_amount = 1.058 * principal;
else if(3 <= number_of_months <= 6) 
    total_amount = 1.065 * principal;
else if(7 <= number_of_months <= 9) 
    total_amount = 1.068 * principal;    
else 
    total_amount = 1.1 * principal;
    


console.log(total_amount);
