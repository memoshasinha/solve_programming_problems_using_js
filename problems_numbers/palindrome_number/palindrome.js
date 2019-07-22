/**
 * @param {number} n
 * @return {boolean}
 */
var isPalindrome = function(n) {
    let originalNumber = n;
    let result = 0;
    while(n > 0){
        result = result * 10+ (n%10);
        n = Math.floor(n/10);
    }
    return originalNumber === result? true: false;
};
module.exports = isPalindrome;