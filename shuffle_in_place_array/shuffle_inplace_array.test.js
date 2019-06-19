const shuffle_inplace_array = require('./shuffle_inplace_array');

test('array is empty', () => {
    arrayToBeShuffled = [];
    let error = new Error("Array cannot be of Zero length");
    expect(shuffle_inplace_array(arrayToBeShuffled)).toStrictEqual(error);
});

test('array has one element', () => {
    arrayToBeShuffled = [1];
    expect(shuffle_inplace_array(arrayToBeShuffled)).toStrictEqual(arrayToBeShuffled);
});

test('array has been shuffled', () => {
    arrayToBeShuffled = [1,5,2,9,4,3];
    let finalShuffledArray  = shuffle_inplace_array(arrayToBeShuffled);
    expect(shuffle_inplace_array(arrayToBeShuffled)).toStrictEqual(finalShuffledArray);
});