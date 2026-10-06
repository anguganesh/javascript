class UserInfo {
    public username_info : string
    private location_info : string

    constructor(username_info : string, location_info : string) {
        this.username_info = username_info
        this.location_info = location_info
    }


    
    public set setUserNameInfo(inputUserInfo : string) {
        this.username_info = inputUserInfo;
    }    
    
    public get getUserNameInfo() : string {
        return this.username_info
    }

    // In Setter Property, No need to mention return type otherwise throw compilation error
    public set setLocationInfo(inputLocationInfo : string) {
        this.location_info = inputLocationInfo;
    }
    

    public get getLocationInfo() : string {
        return this.location_info
    } 
}

let userinfo_1 : UserInfo = new UserInfo("aganesh", "BNG");
console.log(userinfo_1.getUserNameInfo);
console.log(userinfo_1.getLocationInfo);

userinfo_1.setUserNameInfo = "Modified Username"
userinfo_1.setLocationInfo = "JPM"
console.log(userinfo_1.getUserNameInfo);
console.log(userinfo_1.getLocationInfo);



