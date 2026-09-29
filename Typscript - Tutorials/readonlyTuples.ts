let userData : readonly [username: string, location: string];

userData = ["ganesh", "BNG"];
console.log(userData);


userData[0] = "Modified";
userData[1] = "JPM";
console.log(userData);


type studentInfo = readonly [studentName: string, studentid: number ];

let student_1 : studentInfo = ["Angu", 68];
let student_2 : studentInfo = ["Dhinesh", 100];

console.log(student_1);
console.log(student_2);

//student_1.push("MDU");  // Through a compilation Error As studentInfo has readonly attributes
//student_2.push("MDU");  // Through a compilation Error As studentInfo has readonly attributes

console.log(student_1);
console.log(student_2);







