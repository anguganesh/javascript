
let count = 0

do {
    count++;
    console.log(count, "Hi");

    for (let index = 1; index <= count; index++)
        console.log(`${index} : Hello`);
    
    console.log();
    
} while (count < 5);
