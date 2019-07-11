const bracket_validator = require('./bracket_validator');

test('input is empty', () => {
    let input = "";
    let error = new Error("String cannot be of zero length");
    expect(bracket_validator(input)).toStrictEqual(error);
});
