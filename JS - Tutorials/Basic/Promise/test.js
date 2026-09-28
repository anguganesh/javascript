
class PromiseTest {

    createPromiseObject() {
        return new Promise((resolve, reject) => {
            let isSuccess = true;
            if(isSuccess) 
                resolve("Resolve Method Message");
            else
                reject();
        });
    }

    resolveMethod(message) {
            console.log(message);
            setTimeout((argument) => {
                console.log(argument);
                
            }, 3000, "Settimeout Message");
        }

    printMessage() {
        this.createPromiseObject().then((message) => this.resolveMethod(message) )
                                 .catch(() => console.log("Execution is stopped"));
    }


     createPromiseObjectNew() {     
        return new Promise((resolve, reject) => {
            let isSuccess = true;
            if(isSuccess) {               
                setTimeout(resolve, 3000, "Timeout Message");
            }                              
            else
                reject();
        });
    }
}

let promiseTestObject = new PromiseTest();
//promiseTestObject.printMessage();
promiseTestObject.createPromiseObjectNew().then((message) =>  console.log(message, new Date().toLocaleTimeString() ));