
type tupleObjectTypes = [string, number]

let tupleData : tupleObjectTypes = ["dhinesh",10];
let tupleData_2 : tupleObjectTypes = ["ganesh",68];
console.log(tupleData[0],tupleData[1]);
console.log(tupleData_2);

let tuples : [string, number];
tuples = ["Angu", 10];
console.log(tuples);


let tuples_info : [string, number] = ["Dhinesh", 56];

let tuples_info_2  = ["Ganesh", 45]; // This is string | number array, NOT tuple

console.log(tuples_info);
console.log(tuples_info_2);


const userInfo : [string, number] = ["Angu", 45];
console.log(userInfo);

let rgb : [number, number, number] = [255, 255, 255];
console.log(rgb);

type userInfo = [username: string, city:string];
type userInfo_2 = [string,string];
let userInfoDetails : userInfo = ["aganesh", "MDU"];

console.log(userInfoDetails[0]);
console.log(userInfoDetails[1]);










