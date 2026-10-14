interface Database {
    connection : string,
    username : string,
    password : string
}

function genericWithInterface_1<T extends Database, U extends keyof Database>(object : T, key : U): T[U] {
    return object[key]
}

let databaseInfo : Database = {
    connection : "test.salesforce.com",
    username : "aganesh@salesfore.com",
    password : "fdsalfsaferrekljll"
}

console.log(genericWithInterface_1(databaseInfo, "connection"));
console.log(genericWithInterface_1(databaseInfo, "username"));
console.log(genericWithInterface_1(databaseInfo, "password"));

// let finalInfo = genericWithInterface_1(databaseInfo, "password2"); // Through Compilation Error