const maxArea = require('./container_maxarea');

test('empty container',() =>{
    expect(maxArea('')).toStrictEqual(0);
});
test('maximum area',() =>{
    expect(maxArea([1,8,6,2,5,4,8,3,7])).toStrictEqual(49);
});