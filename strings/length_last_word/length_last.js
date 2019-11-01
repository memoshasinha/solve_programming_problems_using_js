/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    s = s.trim();
    let chars = s.split('');
    let count = 0;
    let i = chars.length-1;
    while (i >= 0 && chars[i] != ' ') {
        count++;
        i--;
    }
    return count;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("a "));
console.log(lengthOfLastWord(" "));
console.log(lengthOfLastWord("b a  "));