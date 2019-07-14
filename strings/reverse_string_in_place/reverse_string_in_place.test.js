const reverse_string_in_place = require('./reverse_string_in_place');

test('array is empty', () => {
   let originalString = "";
    let error = new Error("Array cannot be of Zero length");
    expect(reverse_string_in_place('')).toStrictEqual(error);
});
