
let hp = {

       processor : "Core i5",
             ram : "16 GB",
         storage : "1 TB",
           brand : "HP",

    watch_movies : function() {   
        console.log("Watching Movies");        
    },   

    getConfig : function() {
        console.log("Processor : ", this.processor);
        console.log("Ram : ", this.ram);
        console.log("Storage : ", this.storage);
        console.log("Brand : ", this.brand);
    }
};

let lenovo = {

       processor : "Core i7",
             ram : "16 GB",
         storage : "1 TB",
           brand : "Lenovo",

    watch_movies : function() {   
        console.log("Watching Movies");        
    },   

    getConfig : function() {
        console.log("Processor : ", this.processor);
        console.log("Ram : ", this.ram);
        console.log("Storage : ", this.storage);
        console.log("Brand : ", this.brand);                
    },

    compare : function (laptop_object) {
        if(this.processor > laptop_object.processor)
            this.getConfig();        
        else               
            laptop_object.getConfig();
    }
};



