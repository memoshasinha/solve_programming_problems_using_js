/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aIndex = a.length - 1;
    let bIndex = b.length - 1;
    let final = '';
    let carry = 0;
    while(aIndex >=0 || bIndex >=0 || carry > 0 ){
        
        let res = (aIndex >= 0 ? Number(a.charAt(aIndex)) : 0) +
                      (bIndex >= 0 ? Number(b.charAt(bIndex)) : 0) +
                      carry;
            
        carry = Math.floor(res/2);
        final += res%2;
        aIndex--;
        bIndex--;
    }
    return final.split('').reverse().join('');
};
console.log(addBinary("11","1"));