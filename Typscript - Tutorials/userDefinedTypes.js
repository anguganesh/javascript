"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let cardNumberInfo = {
    cardNumber: 123456789098
};
let cardDateInfo = {
    expiryDate: "10/20"
};
let cardInfoFinal = {
    cardNumber: cardNumberInfo,
    expiryDate: cardDateInfo,
    cvv: "123"
};
function printCardInfo(cardInfoDetails) {
    console.log(cardInfoDetails.cardNumber.cardNumber);
    console.log(cardInfoDetails.expiryDate.expiryDate);
    console.log(cardInfoDetails.cvv);
}
printCardInfo(cardInfoFinal);
//# sourceMappingURL=userDefinedTypes.js.map