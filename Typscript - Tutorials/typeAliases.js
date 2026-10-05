"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user_data = {
    userName: "Angu"
};
function printDetails(user) {
    // console.log(user?.age===undefined ? "NOT Provided" : user.age);
    console.log(user.age);
    console.log(user.userName);
}
let pgData = {
    location: "Bangalore",
    numberOfRooms: 10
};
function printPGDetails(pgData) {
    console.log((pgData === null || pgData === void 0 ? void 0 : pgData.location) === undefined ? "Chennai" : pgData.location);
    console.log(pgData.numberOfRooms);
}
printDetails(user_data);
printPGDetails(pgData);
//# sourceMappingURL=typeAliases.js.map