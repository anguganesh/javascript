class Test {

    numbers = [90,88,95,96,88];

    constructor(sum) {
        this.sum = sum
    }

    summation = function test(eachInput) {
        console.log(eachInput);        
        return this.sum += eachInput;
    }

}

let testObject = new Test(0);
testObject.numbers.forEach(eachValue => testObject.summation(eachValue));
console.log(testObject.sum);
