
// Use Type for Define Multiple Options using Single Variable
type flightStatus = "scheduled" | "departured" | "cancelled" | "arrived"
type flightClass = "economy" | "business" | "first"

class Flight {
    flightName : string
    origin : string
    destination : string
    status : flightStatus
    classInFlight : flightClass

    constructor(
        flightName: string,
        origin : string,
        destination : string,
        status : flightStatus,
        classInFlight : flightClass ) {
        this.flightName = flightName
        this.origin = origin,
        this.destination = destination,
        this.status = status,
        this.classInFlight = classInFlight
    }
}

let flightObject : Flight = new Flight("LE107", "Delhi", "Chennai", "arrived", "business")
console.log(flightObject);

