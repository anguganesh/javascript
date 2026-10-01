"use strict";
let data_1 = {
    serialNumber: 10,
    getSerialInfoDetails: () => "Without Argument"
};
let data_2 = {
    serialNumber: 20,
    getSerialInfoDetails: (serialNumber) => {
        return serialNumber + "";
    }
};
console.log(data_1.getSerialInfoDetails());
