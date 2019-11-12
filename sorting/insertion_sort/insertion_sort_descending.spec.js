
const insertionSortDescending = require('./insertion_sort_descending');
test('null array',()=>{
    let arr=[];
    let error = new Error("array cannot be null");
    expect(insertionSortDescending(arr)).toStrictEqual(error);
});

test('ascending order sorting',()=>{
    let arr=[5,2,4,3,1];
    expect(insertionSortDescending(arr)).toStrictEqual([5,4,3,2,1]);
});

test('more than one similar value',()=>{
    let arr=[5,2,2,3,1];
    expect(insertionSortDescending(arr)).toStrictEqual([5,3,2,2,1]);
});
test('negative and postive values',()=>{
    let arr=[-5,-1,2,5,3,4,1];
    expect(insertionSortDescending(arr)).toStrictEqual([5,4,3,2,1,-1,-5]);
});
