"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
console.log(data_2.getSerialInfoDetails(10));
//# sourceMappingURL=interface_2.js.map