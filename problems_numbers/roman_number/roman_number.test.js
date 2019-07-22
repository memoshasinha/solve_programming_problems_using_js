const roman_number = require('./roman_number');
test('empty number', () =>{
    expect(roman_number('')).toStrictEqual(undefined);
});
test('empty number', () =>{
    expect(roman_number('LVIII')).toStrictEqual(58);
});
test('empty number', () =>{
expect(roman_number('MCMXCIV')).toStrictEqual(1994);
});