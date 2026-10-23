// const keyword is used to declare constants

// 1. const keyword is used to declare Constants
   const company_name = "Google"
   if(true) {
    const company_name = "Microsoft"
   }
   console.log(company_name);
   

// 2. Can NOT Re-declare constants
// Throw an compilation error

// const company_name = "Google"
// const company_name = "Microsoft"

// 3. Can NOT Re-initialize constants
// NOT throwing compilation error but Getting error during execution (runtime)

// const first_name = "Angu"
// first_name = "Ganesh"

// 4. const variable MUST be initialized. So there is NO default value for const keyword
// otherwise throw an Compilation error


