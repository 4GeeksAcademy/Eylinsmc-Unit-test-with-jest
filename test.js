const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
})

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.26 yenes", function() {
    const { fromDollarToYen } = require('./app.js');
    const yenes = fromDollarToYen(5);
    const expected = 5 * 146.26;
    expect(fromDollarToYen(5)).toBeCloseTo(731.3, 0.008);
})

test("1 yenes should be 0.0055 pound", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(500);
    const expected = 500 * 0.0055;
    expect(fromYenToPound(500)).toBeCloseTo(2.77, 0.009); 
})