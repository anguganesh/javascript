class Ticket {

    // Create Object through Function Expression
    promise_object = new Promise((resolve, reject) => {
                            let test = false;
                            if(test == true)
                                resolve();
                            else
                                reject();
                        });
                        
    // Create Object through Function                    
    ticketBooking() {

        return new Promise((resolve, reject) => {
            let test = true;
            if(test == true)
                resolve();
            else
                reject();
        })
    }

    cruiseBooking() {
        return new Promise((resolve, reject) => {
             let test = true;
            if(test == true)
                resolve();
            else
                reject();
        });
    }

    travelMode() {
          
       // this.ticketBooking().then(this.travelViaTrain, this.travelViaBus);
      //  this.ticketBooking().then(() => console.log("Ticket is Confirmed. So travel in Train"), 
        //                          () => console.log("Ticket is NOT confirmed. so travel in bus") )

        this.ticketBooking().then(() => this.cruiseBooking().then(this.travelViaShip(), this.travelViaAir), 
                                  () => console.log("Ticket is NOT confirmed. so travel in bus") )
        this.promise_object.then(() => this.cruiseBooking().then(this.travelViaShip(), this.travelViaAir), 
                                  () => console.log("Ticket is NOT confirmed. so travel in bus") )
    }

    travelViaTrain() {
        console.log("Ticket is Confirmed. So travel in Train");       
    }

    travelViaBus() {
        console.log("Ticket is NOT confirmed. so travel in bus");        
    }

    travelViaShip() {
        console.log("Ticket is confirmed. so travel via Ship ");        
    }

    travelViaAir() {
        console.log("Ticket is NOT confirmed. so travel via Air");    
         
    }

}

let ticketObject = new Ticket();
ticketObject.travelMode();

