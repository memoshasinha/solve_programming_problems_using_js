/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(n) {
    let sign = n < 0;
    let result = 0;
    n = Math.abs(n);
    while(n > 0){
        let remainder = n %10;
        result= result*10 + (n % 10);
        n = Math.floor(n/10);
    }
    return result > 0x7FFFFFFF ? 0: sign ? -result: result;
};

module.exports = reverse;