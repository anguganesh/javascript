
let laptop = {
    brand : "HP",
    price : 50000,
    processor : "Core i7",
    ram : "16 GB",
    graphics_card : "2 GB",
    expandable_ram : ["32 GB", "64 GB"],
    usb : {
        port : 2
    }
}

console.log(laptop?.usb?.port);
console.log(laptop["usb"]["port"])
