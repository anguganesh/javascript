class UserData {
    
    public username: string
    private location?: string

    constructor(username : string, location: string = "CHN" ) {
        this.username = username;
        this.location = location;
    }

    
    public get getUsername() : string {
        return this.username;
    }
    
    
    public get getLocation() : string | undefined {
        return this.location;
    }
}

let user_data_1 : UserData = new UserData("aganesh", "JPM");
console.log(user_data_1.getUsername);
console.log(user_data_1.getLocation);






