
let day = "Monday"

switch (day) {

    case "Monday":
        console.log(day, "Wakeup @ 7 AM");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log(day, "Wakeup @ 6 AM");
        break;
    case "Friday":
        console.log(day, "Wakeup @ 5 AM");
        break
    case "Saturday":
    case "Sunday":
        console.log(day, "Wakeup @ 4 AM")
        break
    default:
        console.log(day, "Wakeup @ 3 AM");
        



}