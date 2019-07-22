const reverse_integer = require('./reverse_integer');
test('number is null', () => {
    expect(reverse_integer('')).toStrictEqual(0);
 });
 test('number is positive', () => {
    expect(reverse_integer(123)).toStrictEqual(321);
 });
 
 test('number is negative', () => {
    expect(reverse_integer(-123)).toStrictEqual(-321);
 });
 test('number is too large', () => {
    expect(reverse_integer(123456789123456)).toStrictEqual(0);
 });
 