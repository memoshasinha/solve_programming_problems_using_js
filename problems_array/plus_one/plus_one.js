/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // iterate from left to right
    for (let i = digits.length - 1; i >= 0; i -= 1) {
        // add one to ith element
        digits[i] = (digits[i] + 1) % 10;
        if (digits[i] !== 0) return digits;
    }
    digits.unshift(1);
    return digits;
};
module.exports = plusOne;
console.log(plusOne([1,2,3]));
console.log(plusOne([]));