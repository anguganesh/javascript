import { id } from "date-fns/locale";

let movieName : number | string = "VTV";
movieName = 23;

console.log(movieName);


type userDetails = {
    name : string;
    id : number;
} 

type userInfo = {
    username : string;
    id : number
}

let userDetails_1 : userDetails | userInfo = {
    name : "Angu",
      id :  123
}

userDetails_1 = {
    username : "aganesh",
          id : 123
}

function printStudentId(id : number | string) {
    console.log("User Id : ", id)        
}

printStudentId(123);
printStudentId("test123");


let nummbersAndCharacters : (number | string)[] = [1,"test","test2"]
let nummbersAndCharacters_2 : Array<number | string> = new Array<number | string>();
nummbersAndCharacters_2.push("test");
nummbersAndCharacters_2.push(10);
console.log(nummbersAndCharacters_2);



let data : (number | string | boolean)[] = [1,"test",true,false];
console.log(data.values());


for(let value of  data.values()) {
    console.log(value);
    
}





