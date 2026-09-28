type User = {
    userName : string,
    isActive : boolean
}

let user_1: User = {
    userName : "aganesh",
    isActive : true
}

let user_2 : User = {
    userName : "jayavasu25",
    isActive : true
}

let userArray : User[] = [user_1, user_2];
console.log(userArray);


let userArray_2 : Array<User> = new Array<User>();
userArray_2.push(user_1);
userArray_2.push(user_2);
console.log(userArray_2);



