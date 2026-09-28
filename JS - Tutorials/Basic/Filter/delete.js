let values = [0,-9,-9,-10,23,12, 0];

let sum = values.filter(eachValue => eachValue > 0)
                .reduce( (result, eachValue) => result += eachValue, 0 );
console.log(sum);

let output = values.filter(eachValue => values.indexOf(eachValue) == values.lastIndexOf(eachValue) )
                   .map(eachValue => eachValue);
console.log(output);

let full_name = "angu ganesh Muniyasamy";

let result = full_name.split(" ")
                      .reduce((output, eachWord) => { 
                                                        eachChar = eachWord[0].toUpperCase();
                                                        output += eachChar;
                                                        return output; 
                                                    }  , "");
console.log(result);


result = full_name.split(" ")
                      .reduce((output, eachWord) => (output += eachWord[0]).toUpperCase()  , "");
console.log(result);