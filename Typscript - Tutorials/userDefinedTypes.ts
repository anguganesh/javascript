
type CardNumber = {
    cardNumber : number
}

type cardDate = {
    expiryDate : string
}

type CardInfo = {
    cardNumber : CardNumber,
    expiryDate : cardDate,
    cvv : string
}

type CardInfo_2 =  CardNumber & cardDate & {
    cvv : string
}

let cardNumberInfo : CardNumber = {
    cardNumber : 123456789098
}

let cardDateInfo : cardDate = {
    expiryDate : "10/20"
}

let cardInfoFinal : CardInfo = {
    cardNumber : cardNumberInfo,
    expiryDate : cardDateInfo,
    cvv : "123"
}

function printCardInfo(cardInfoDetails : CardInfo) {
    console.log(cardInfoDetails.cardNumber.cardNumber);
    console.log(cardInfoDetails.expiryDate.expiryDate);
    console.log(cardInfoDetails.cvv);   
}

printCardInfo(cardInfoFinal);