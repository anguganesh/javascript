class User {

    static numberOfUsers = 0;

    constructor(name, age) {
        this.name = name; 
        this.age = age;
        User.numberOfUsers++;      
    }
}

let user_one = new User("Angu",34);
let user_two = new User("Dhinesh",36);
console.log(user_one);
console.log(user_two);
console.log(User.numberOfUsers);

