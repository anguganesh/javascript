class Temperature {
    constructor(temp_data) {
        this.temperature = temp_data;
    }

    get get_Temperature() {
        return this.temperature;
    }

    set set_Temperature(temperature) {
        this.temperature = temperature;
    }
}


let temperature_object = new Temperature(100);
console.log(temperature_object.get_Temperature);
temperature_object.set_Temperature = 200;
console.log(temperature_object.get_Temperature);


