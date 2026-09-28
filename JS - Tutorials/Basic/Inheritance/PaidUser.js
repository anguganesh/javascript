
import {User} from "./User.js";


export class PaidUser extends User {
    constructor(name, age) {
        super(name, age);
        this.storage = 100;
    }

    toString() {
        console.log("toString() method");
        
    }

    premium_storage() {
        console.log(`Storage for Paid User has ${this.storage} GB`);
        
    }
}

let paid_user_one = new PaidUser("Jaya", 30);
paid_user_one.login();
paid_user_one.premium_storage();
