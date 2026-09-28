class HandlingError {

    validateNumber(number) {
        try {
                 
            if(number === undefined)
                throw "Number should NOT be BLANK";
            else if(typeof number === "string")
                throw `Input should NOT be in String Type`
            else if(globalThis.isNaN(number))
                throw `${number} is NOT number`;
            else
                console.log(`given Input is ${number}`);         
        } catch (error) {
            console.log(error);            
        }
        finally {
            console.log("Bye");   
        }
            
            
    }


}

let handlingError = new HandlingError();
handlingError.validateNumber("10");