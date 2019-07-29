const strStr = require('./implement_substr');

test('empty string',()=>{
    expect(strStr('haystack','')).toStrictEqual(0);
});

test('empty string',()=>{
    expect(strStr('hello','ll')).toStrictEqual(2);
});

test('empty string',()=>{
    expect(strStr('aaaaa','bba')).toStrictEqual(-1);
});