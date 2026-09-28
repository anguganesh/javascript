type userData = {
    name : string
}


let userdata_1 : userData = {
    name : "Angu"
}

type userInfo = {
    readonly name : string
}

let userInfo_1 : userInfo = userdata_1;
console.log(userInfo_1.name);

userdata_1.name = "test";
console.log(userInfo_1.name);

let info : readonly Array<number> = [];

let info_2 : readonly number[] = [1,2,3];
let info_3 : readonly [number, string] = [1,"test"];









