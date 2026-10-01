"use strict";
let student_info_1 = {
    studentName: "ganesh",
    departmentName: "Computer Application",
    id: 56,
    character: function () {
        return "Good";
    },
    IQ: () => {
        return 150;
    },
    location: "Madurai"
    // character : (param: number) => {
    //     console.log(param);        
    //     return "Good";
    // }
};
console.log(student_info_1.character());
console.log(student_info_1.IQ());
console.log(student_info_1.studentName);
