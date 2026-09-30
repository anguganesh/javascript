const SeatAllotement_2 =  {
    AISLE : "AISLE",
    MIDDLE : 0,
    WINDOW : 10
} as const;

console.log(SeatAllotement_2.AISLE);
console.log(SeatAllotement_2["MIDDLE"]);


