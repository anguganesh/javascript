numbers = [3,5,4,6,7,10,0]
result = new Array();
sum = 0;

summation = function(eachInputData) {
                return this.sum+=eachInputData;
            }


filterData = function(eachInputData) {
               return eachInputData%2===0;
            }
let output_array = numbers.filter ( function(eachInputData) {
                                     return eachInputData%2===0;
                                   }  );
console.log("Result Array : ", output_array);
    

console.log("Filter Data Function : ",  numbers.filter( (eachInputData) =>  eachInputData%2===0, numbers ));           

console.log("Filter Data : ",  numbers.filter(eachValue => filterData(eachValue), numbers));


console.log("Arrow Function :", numbers.filter((eachValue, index, numbers) => eachValue%2===0, numbers ));


numbers.filter((eachValue, index, numbers) => eachValue%2===0)
        .forEach(eachValue => console.log(eachValue));

console.log();
numbers.filter(eachValue => eachValue%2!=0)
       .map(eachValue => eachValue * 2)
       .forEach(eachvalue => result.push(eachvalue));
console.log(result);

console.log();
numbers.filter(eachValue => eachValue%2!=0)
       .map(eachValue => eachValue * 2)
       .forEach(eachValue => sum+=eachValue);
console.log(sum);

console.log();
sum = 0;
numbers.filter(eachValue => eachValue%2!=0)
       .map(eachValue => eachValue * 2)
       .forEach(eachValue => summation(eachValue));
console.log(sum);


let output = numbers.filter(eachValue => eachValue%2!=0)
                    .reduce((a,b) => a+b);
console.log(output);
