
// Create Custom Datatype using Type Aliases 
type CustomString = string

class College {
    public collegeName : CustomString
    public location : string
    public establishedYear : Number

    constructor(collegeName : string,
                location : string,
                establishedYear : Number) {
        this.collegeName = collegeName
        this.location = location
        this.establishedYear = establishedYear
    }

    public printCollegeInfo (college:College) : void {
        console.log(college.collegeName);
        console.log(college.location);
        console.log(college.establishedYear);   
    }
}

let college : College = new College("IIT-Chennai","Chennai",1976);
college.printCollegeInfo(college);