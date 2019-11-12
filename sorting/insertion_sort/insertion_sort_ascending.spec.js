
const insertionSortAscending = require('./insertion_sort_ascending');
test('null array',()=>{
    let arr=[];
    let error = new Error("array cannot be null");
    expect(insertionSortAscending(arr)).toStrictEqual(error);
});

test('ascending order sorting',()=>{
    let arr=[5,2,4,3,1];
    expect(insertionSortAscending(arr)).toStrictEqual([1,2,3,4,5]);
});

test('more than one similar value',()=>{
    let arr=[5,2,2,3,1];
    expect(insertionSortAscending(arr)).toStrictEqual([1,2,2,3,5]);
});
test('negative and postive values',()=>{
    let arr=[-5,-1,2,5,3,4,1];
    expect(insertionSortAscending(arr)).toStrictEqual([-5,-1,1,2,3,4,5]);
});
