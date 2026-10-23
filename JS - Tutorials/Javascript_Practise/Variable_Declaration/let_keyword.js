// let keyword is the new way to declare variable
// scope : Blocked scope (ie) if / else / switch

// 1. Able to access variable only in Blocked Scope
let message = "old message"

if(true) {
    let message = "new message" // This message variable has life within if block only. It does NOT affect message variable
                                // outside of if block.
   // console.log(message);    
}

console.log(message);

// 2. Can NOT Re-declare the let variable. 
// Through an compilation Error if we Re-declare let variable

// let first_name = "Angu"
// let first_name = "Ganesh"

// 3. Can Re-initialize the let variable

let first_name = "Angu"
first_name = "Ganesh"

// 4. Default value is undefined

let info
console.log(info);


