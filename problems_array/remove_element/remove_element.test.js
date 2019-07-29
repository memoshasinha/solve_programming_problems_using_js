const remove_element = require('./remove_element');
test('the array length is zero',()=>{
expect(remove_element([])).toStrictEqual(0);
});

test('the array has values',()=>{
    expect(remove_element([0,0,1,1,1,2,2,3,3,4],4)).toStrictEqual(9);
});

test('the array has no duplicate values',()=>{
    expect(remove_element([0,1,2,3,4],11)).toStrictEqual(5);
});