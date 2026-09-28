class PromiseTest {

    static promiseObject_2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("setTimeOut()_2",new Date().toLocaleTimeString()); 
            console.log("Resolve Object_2");
            resolve("resolve argument_2");
           
        }, 5000);
    });

    static promiseObject = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("setTimeOut()_1",new Date().toLocaleTimeString()); 
            console.log("Resolve Object_1");
            resolve("resolve argument_1");
           
        }, 5000);
    });

  

    static promiseObject_3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("setTimeOut()_3",new Date().toLocaleTimeString()); 
            console.log("Resolve Object_3");
            resolve("resolve argument_3");
           
        }, 10000);
    });


}

let promiseTestObject = new PromiseTest();
//promiseTestObject.getData();
