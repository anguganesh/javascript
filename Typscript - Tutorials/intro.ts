
export {}
console.log("Hello Typescript");

let name : string = "Angu";
console.log(name);

let rollNumber : Number = 68;
console.log(rollNumber);

let isLogged : boolean = true;

let isLoggedIn : Boolean = false;

let test: string = "test";
console.log(test);


let userDetails = {name : "Angu Ganesh", qualification : "MCA"}
let userName = userDetails?.name;
let qualification = userDetails?.qualification;
//let notExist = userDetails.notExist;

console.log(userName);
console.log(qualification);
//console.log(notExist);


// Arrow Function

let result = (name: string): string => name.toUpperCase(); 

console.log("Result is : ", result("Ganesh"));

let arrays = new Array("Dhinesh","Ganesh");
console.log(arrays);

let capsArrayDetails = arrays.map(eachValue =>  eachValue.toUpperCase());
console.log(capsArrayDetails);

let length_of_each_words = arrays.map((eachValue:string):number => eachValue.length);
console.log(length_of_each_words);


function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}
 
function printToConsole(s: string) {
  console.log(s);
}
 
greeter(printToConsole);

function addTwo(first: number, second: number) : number {
    return first + second;
}

console.log(addTwo(3,4));
 

function addThree(a:number, b:number, c:number=10) {
    return a + b + c ;
}

console.log(addThree(1,3,5));


let sum = (a:number, b:number, c:number = 10) =>  a + b + c ;

console.log(sum(1,2,12));

let upper = (name: string) => name.toUpperCase();

console.log(upper("Angu ganesh"));


function consoleError(errorMsg: string): void {
    console.log(errorMsg);    
}

function consoleErrorMessage(errorMsg: string): never {
    throw new Error(errorMsg);    
}

consoleError("Error Message");
consoleErrorMessage("Error Message");