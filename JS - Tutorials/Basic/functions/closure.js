
function printData(firstName) {
    return function print (lastName) {
        let full_name = firstName + " " + lastName;
        return full_name;
    }   
}

let print_details_1 = printData("Angu")
console.log(print_details_1("Ganesh"));


let print_details_2 = printData("Dhinesh")
console.log(print_details_2("Pandiyan"));

console.log(print_details_1("NIT"));
console.log(print_details_2("JNU"));


