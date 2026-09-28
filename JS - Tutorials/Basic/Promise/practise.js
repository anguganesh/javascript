

const cart = ["shoes", "chappels"];


async function createOrder(cart) {

    let promiseObject = new Promise( (resolve, reject) => {

        if(!validateCart()) {
            let error = new Error("Cart is Failed");
            reject(error);
        }

        let orderId = 123;
        if(orderId)
            setTimeout(() => {
                resolve(orderId);    
            }, 5000);
                      

    });

    return promiseObject;
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        let result = true;
        if(result)
            resolve("Proceed To Payment");
        else
            reject(new Error("Payment Error"));
    });
}

function showOrderSummary() {
    return new Promise((resolve, reject) => {
        let orderSummary = true;
        if(orderSummary)
            resolve(150);
        else
            reject(new Error("Order Summary Failed"));
    });
}

function updateWallet(expenseAmount) {
    return new Promise((resolve, reject) => {
        let remaining_amount = 1000 - expenseAmount;
        if(remaining_amount > 0) {
            console.log(remaining_amount);            
            resolve(remaining_amount);
        }            
        else
            reject(new Error("Amount is NOT Sufficient"));
    });
}

async function promiseData() {
    return new Promise((resolve, reject) => {

        let value = true;
        if(value) {
            setTimeout(() => {
                resolve("Resolved Object");
            }, 2000);
        }
        else
            reject("Reject Object");
    })
}

function validateCart() {
    return true;
}


// createOrder(cart)
//     .then((orderId) => console.log(orderId))
//     .then((orderId) => proceedToPayment(orderId))
//     .then((orderInfo) => console.log(orderInfo)) 
//     .catch((error) => console.log(error.message));         
    
// createOrder(cart)
//     .then(orderId => orderId)
//     .then(orderId => proceedToPayment(orderId))
//     .then(() => showOrderSummary())
//     .then((expenseAmount) => updateWallet(expenseAmount))
//     .catch(error => console.log(error.message));

let result = promiseData()
await result
            .then((result) => console.log("log function 1", result))
            .catch((error) => console.log(error));
console.log("log function 2",result);
setTimeout(()=> {console.log("log function 3",result)},5000);


