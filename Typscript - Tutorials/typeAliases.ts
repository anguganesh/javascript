type userData = {
    userName: string,
    age?: number
}

let user_data: userData = {
    userName : "Angu"
}

function printDetails(user: userData) {
   // console.log(user?.age===undefined ? "NOT Provided" : user.age);
   console.log(user.age);
   console.log(user.userName);
}

// interface property can NOT have an initializer
interface PgDetails {
    location?: string,
    numberOfRooms ?:number
}

let pgData = {
    location : "Bangalore",
    numberOfRooms : 10
}

function printPGDetails(pgData: PgDetails) {
    console.log(pgData?.location === undefined ? "Chennai" : pgData.location );
    console.log(pgData.numberOfRooms);
}


printDetails(user_data);
printPGDetails(pgData);

