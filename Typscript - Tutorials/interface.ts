interface studentInfo {
    readonly departmentName : string
    studentName : string,
    id : number,
    character(behaviour?: string): string,
    IQ() : number,
    location ?: string
   // character : (param : number) => string
    
}

let student_info_1 : studentInfo = {
    studentName : "ganesh",
    departmentName : "Computer Application",
    id : 56,

    character : function() {       
        return "Good";
    },

    IQ :() => {
        return 150;
    },
     
    location : "Madurai"
    // character : (param: number) => {
    //     console.log(param);        
    //     return "Good";
    // }
    
}

console.log(student_info_1.character());
console.log(student_info_1.IQ());
console.log(student_info_1.studentName);

let student_info_2: studentInfo = {
    departmentName : "CA",
    studentName : "Dhinesh",
    id : 100,
    character : function(charDetails: string) {
        return charDetails;
    },
    IQ : function() {
        return 100;
    },
    location : "CHN"
}



console.log(student_info_2.character("Good"));
console.log(student_info_2.IQ());

