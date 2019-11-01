const plus_one = require('./plus_one');
test('empty array',()=>{
    expect(plus_one([])).toStrictEqual([1]);
});

test('empty array',()=>{
    expect(plus_one([1,2,3])).toStrictEqual([1,2,4]);
});