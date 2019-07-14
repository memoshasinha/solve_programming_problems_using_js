const validateExpression = require('./bracket_validator');

test('input is empty', () => {
    let input = "";
    let error = new Error("Expression cannot be of zero length");
    expect(validateExpression(input)).toStrictEqual(error);
});

test('input is valid', () => {
    let input = "{if(2>1{console.log('valid');})}";
    expect(validateExpression(input)).toStrictEqual("Valid expression");
});

test('input is invalid', () => {
    let input = "{if(2>1{console.log('valid');)}";
    expect(validateExpression(input)).toStrictEqual("Invalid expression");
});


