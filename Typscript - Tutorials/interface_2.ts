interface Data {
    serialNumber : number;
    getSerialInfoDetails : (serialNumber ?: number) => string;
}

let data_1 : Data = {
    serialNumber : 10,
    getSerialInfoDetails : () => "Without Argument"
}

let data_2 : Data = {
    serialNumber : 20,
    getSerialInfoDetails : (serialNumber?: number) =>  {
        return serialNumber + "";
    }
}  


console.log(data_1.getSerialInfoDetails());
console.log(data_2.getSerialInfoDetails(10));

