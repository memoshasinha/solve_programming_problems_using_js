const remove_dup_array = require('./remove_dup_array');
test('the array length is zero',()=>{
expect(remove_dup_array([])).toStrictEqual(0);
});

test('the array has values',()=>{
    expect(remove_dup_array([0,0,1,1,1,2,2,3,3,4])).toStrictEqual(5);
});

test('the array has no duplicate values',()=>{
    expect(remove_dup_array([0,1,2,3,4])).toStrictEqual(5);
});