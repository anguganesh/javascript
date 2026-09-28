
let laptop = {
    brand : "HP",
    price : 50000,
    processor : "Core i7",
    ram : "16 GB",
    graphics_card : "2 GB",
    expandable_ram : ["32 GB", "64 GB"],
    usb : {
        port : 2
    },

    watching_movies : function() {
        console.log("Watching Movies in Laptop");
    },

    playing_games() {
        console.log("Playing Games in Laptop");
    }
}

console.log(laptop);


laptop.usb.port = 5;
console.log(laptop);


laptop.watching_movies();
laptop.playing_games();

