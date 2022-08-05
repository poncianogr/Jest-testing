// one euro is:
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromDollarToYen = (valueInDollar) => {

return parseFloat((valueInDollar * 127.9).toFixed(2));
}

/* const fromEuroToDollar = (valueInEuro) => {
let valueInDollar = (valueInEuro * oneEuroIs["USD"]);
return valueInDollar;
} */

const fromYenToPound = (valueInYen) => {
    let valueInPound = (valueInYen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    return valueInPound;
}

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};