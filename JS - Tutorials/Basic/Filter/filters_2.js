
let numbers = [3,5,4,6,7,10];

filterData = function(eachInputData) {
               return eachInputData%2===0;
            }

double = function(eachInputData) {
            return eachInputData * 2;
         }

let result = numbers.filter(function(eachInputData) {
               return eachInputData%2===0;
            });
console.log(result);

result = numbers.filter(filterData)
               .map(double);
console.log("Double : ", result);


result = numbers.filter(eachData =>   filterData(eachData) )
                .map(eachValue => eachValue * 2);
console.log("Modified Data : ", result);




