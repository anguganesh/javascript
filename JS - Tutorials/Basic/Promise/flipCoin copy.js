import { he } from "date-fns/locale";

class FlipCoin {

    

   tossCoin() {
     
        return new Promise((resolve, reject) => {
            let headOrTail = Math.round(Math.random());
            console.log(headOrTail);           

            if(headOrTail == 1)
                resolve("Success");
            else
                reject("Failure");
        })

    }

    async battingOrFielding() {

        // Recommended Way to write try/catch block
        try {
           let result = await this.tossCoin();
           console.log(result);
           this.batting();                   
        } catch (error) {
            console.log(error);  
            this.fielding();             
        }   
        
         // Another way to write the code
        // this.tossCoin().then(this.batting)
        //                .catch(this.fielding);
    }

    batting = function () {
        console.log("Won Toss. Choose batting");        
    }

    fielding() {
        console.log("Lost Toss. Choose Bowling");        
    }


}

let flipCoinObject = new FlipCoin();
flipCoinObject.battingOrFielding();