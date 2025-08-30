const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

/*
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));

module.exports = { sum };
*/

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


function fromEuroToDollar(euro) {
    let resultEurotoDollar = euro * oneEuroIs["USD"];
    return resultEurotoDollar;
}

fromEuroToDollar(3.5);


function fromDollarToYen(dollar) {
    let yenToDollar = oneEuroIs["JPY"] / oneEuroIs["USD"];
    let resultDollarToYen = yenToDollar * dollar; 
    return resultDollarToYen;
}

fromDollarToYen(2);

function fromYenToPound(yen) {
    let PoundToYen = oneEuroIs["GBP"] / oneEuroIs["JPY"];
    let resultYenToPound = PoundToYen * yen;
    return resultYenToPound;
}

fromYenToPound(2);

// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar }