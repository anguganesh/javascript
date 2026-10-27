// Generator Function
// 1. Returns Iterator Object to generate sequence of values
// 2. Yield keyword pause the execution and returns value
// 3. Execution resumes from last yield value when generator function is called
// 4. Able to retrieve from sequence using for of loop or using next() method


// syntax
// functionkeyword* functionName() {
//   function body using yield to return value to print
//}

function* generator(limit) {
    let [previous, current] = [1, 0]

    while(limit > 0) {       
        yield current
        let temp = previous
        previous = current
        current = current + temp
        limit --
    }
}

let iteratorObject = generator(3)

// for(let eachValue of iteratorObject) {
//     console.log(eachValue);    
// }

console.log(iteratorObject.next());
console.log(iteratorObject.next());
console.log(iteratorObject.next());
console.log(iteratorObject.next());