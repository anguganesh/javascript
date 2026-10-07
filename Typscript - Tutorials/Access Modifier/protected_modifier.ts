class UserDetails {

    protected username_details : string
    public userInfo ?: string
    private userId ?: number

    constructor(username_details : string) {
        this.username_details = username_details
    }

    
    public get getUserNameDetails() : string {
        return this.username_details;
    }
    

}

class SubUser extends UserDetails {

    public modifyData(): void {
        this.username_details = "Modify Data"
    }
}

let sub_user : SubUser = new SubUser("aganesh")
console.log(sub_user.getUserNameDetails);

sub_user.modifyData();
console.log(sub_user["username_details"]);






