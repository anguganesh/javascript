class User {
    
    private username: string
    public location : string;

   // private location ?: string

    
    // constructor(username: string, location: string = "CHN") {
    //     this.username = username;
    //     this.location = location;
    // }
    
    constructor(username : string, location: string) {
        this.username = username;
        this.location = location;
    }

    // public get getLocation() : string {
    //     return this.location;
    // }
    

    public get getUsername() : string {
        return  this.username;
    }

    
    public get getLocationInfo() : string {
        return this.location;
    }
    
    
    // No need to mention return type for the set Property
    public set locationData(locationData : string) {
        this.location = locationData;
    }
    
 

    public getLocation() : string {
        return this.location;
    }
}

let user : User = new User("Ganesh", "JPM");
console.log(user.getUsername);
console.log(user.getLocationInfo);
console.log(user.getLocation());



let user_2 = new User("Dhinesh", "CHN");
console.log(user_2.getUsername);
console.log(user_2.getLocation());



