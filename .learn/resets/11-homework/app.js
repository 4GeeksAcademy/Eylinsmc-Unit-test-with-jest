const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));

module.exports = { sum };

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let yenToDollar = 156.5 / valueInDollar;
    return yenToDollar;
}

const fromYenToPound = function(valueInYen) {
    let poundToYen = 0.87 / valueInYen; 
    return poundToYen;
}

// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }