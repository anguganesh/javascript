
class Calculate {


    e_bill_calculation = function(number_of_units) {
        let units = Number(number_of_units);
        let total_bill = 0;
        while(units > 0) {
            if(units <= 50) {
                total_bill += units * 0.75;
                units = 0;
            }
            else if(units >= 51 && units <= 150) {
                let billable_units = units - 50;
                total_bill += billable_units * 1;
                units -= billable_units;
            }
            else if(units >= 151 && units <=250) {
                let billable_units = units - 150;
                total_bill += billable_units * 1.3;
                units -= billable_units;
            }else {
                let billable_units = units - 250;
                total_bill += billable_units * 1.5;
                units -= billable_units;
            }
        }        

        console.log(total_bill);        
        
    }

}

calculate_object = new Calculate();
calculate_object.e_bill_calculation(60);

