const SeatAllotement =  {
    AISLE : "AISLE",
    MIDDLE : 0,
    WINDOW : 10
} as const;

console.log(SeatAllotement.AISLE);
console.log(SeatAllotement["MIDDLE"]);





