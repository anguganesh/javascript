
function fact(num) {
    let result;
    if (num === 0) 
        result = 1;
    else 
        result = num * fact(num - 1);

    return result;
}

function fact_n(num) {
    let result = 1;
    
    for(let index=2;index<=num; index++) 
        result *= index;
    
    return result;
}


console.log(fact_n(-1));
console.log(fact(-1));
