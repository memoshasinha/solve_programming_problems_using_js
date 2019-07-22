const threesum = require('./three_sum');

test('empty input',()=>{
    expect(threesum([])).toStrictEqual([]);
});
test('empty input',()=>{
    expect(threesum([-1, 0, 1, 2, -1, -4])).toStrictEqual([[-1,-1,2],[-1,0,1]]);
});
