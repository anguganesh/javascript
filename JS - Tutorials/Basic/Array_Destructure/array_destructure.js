let numbers = [90,88,95,96,88,90];
let [a,b,c,d,e,f] = numbers;
console.log(a,b,c,d,e,f);

[a,b,c,,e,f] = numbers;
console.log(a,b,c,e,f);

[a,b,,...d] = numbers;
console.log(d);
