class Test {

     


}

function filterArray(array) {
    array.filter(eachValue => isNaN(eachValue), array)
             .forEach(eachValue => console.log(eachValue), array);
                    
}

filterArray([1,"Ganesh",2,3,4,"Angu",5])