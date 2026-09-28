import { he } from "date-fns/locale";

class FlipCoin {

    

   tossCoin() {
     
        return new Promise((resolve, reject) => {
            let headOrTail = Math.round(Math.random());
            console.log(headOrTail);           

            if(headOrTail == 1)
                resolve();
            else
                reject();
        })

    }

    battingOrFielding() {
        this.tossCoin().then(this.batting)
                       .catch(this.fielding);
                       
    }

    batting() {
        console.log("Won Toss. Choose batting");        
    }

    fielding() {
        console.log("Lost Toss. Choose Bowling");        
    }


}

let flipCoinObject = new FlipCoin();
flipCoinObject.battingOrFielding();