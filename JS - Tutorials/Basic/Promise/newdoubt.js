class Test {

    reachAngu = new Promise( (resolve, reject) => {
        let isReached = true;
        if(isReached)
            //setTimeout(resolve,3000, "Angu Reached");
            setTimeout(() => {
                resolve("Angu Reached");            
            }, 3000);
        else
            reject("Rejected");
    });

    async  userReachedOrNot() {
        try {
            let result = await this.reachAngu;
            console.log("Result is ",result);
        } catch (error) {
            console.log(error);            
        }   
    }
   
}

let test = new Test();
test.userReachedOrNot();
