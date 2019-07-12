const validateExpression = require('./bracket_validator');

test('input is empty', () => {
    let input = "";
    let error = new Error("Expression cannot be of zero length");
    expect(validateExpression(input)).toStrictEqual(error);
});

