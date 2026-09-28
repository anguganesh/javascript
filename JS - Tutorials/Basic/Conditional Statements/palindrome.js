
class Test {


    check_palidrome = function(input_string) {
        let is_palidrome = true;
        let modified_input_string = String(input_string).toLowerCase().replaceAll(" ", "");
        let modified_array = modified_input_string.split("");

        for(let index = 0; index < Math.floor(modified_array.length / 2); index++) {
            let last_index = modified_array.length - index - 1;
            if(modified_array.at(index) != modified_array.at(last_index)) {
                is_palidrome = false; 
                break;
            }
        }  

        return is_palidrome;        
    }

    check_palindrome_using_reverse = function(input_string) {
        let is_palidrome = false;
        let modified_string = String(input_string).replaceAll(" ", "").toLowerCase();
        let reversed = modified_string.split("").reverse().join("").toLowerCase();        
        
        if(modified_string === reversed)
            is_palidrome = true;
        return is_palidrome;        
    }

}

let test_object = new Test();
let output = test_object.check_palidrome("Was it a car or a cat I saw");
console.log(output);

output = test_object.check_palindrome_using_reverse("Was it a car or a cat I saw");
console.log(output);

