
class Test {
    
    numbers = [90,88,95,96,88];

    constructor(sum) {
        this.sum = sum;
    }

    printData = function(eachInput) {
        return this.sum += eachInput;
    }
}

let testObject = new Test(0);
testObject.numbers.forEach(eachValue => testObject.printData(eachValue));
console.log(testObject.sum);

testObject.sum = 0;
testObject.numbers.forEach(eachValue =>  testObject.sum+=eachValue);
console.log(testObject.sum);










