var output = [];
var letterCombinations = function(digits) {
    output = [];
    if (digits !== "")
        backtrack("", digits);
    return output;
};

function backtrack(combination,  next_digits) {
    let letterMap = new Map();
    letterMap.set('2', 'abc');
    letterMap.set('3', 'def');
    letterMap.set('4', 'ghi');
    letterMap.set('5', 'jkl');
    letterMap.set('6', 'mno');
    letterMap.set('7', 'pqrs');
    letterMap.set('8', 'tuv');
    letterMap.set('9', 'wxyz');
    // if there is no more digits to check
    if (next_digits.length == 0) {
        // the combination is done
        output.push(combination);
    }
    // if there are still digits to check
    else {
        // iterate over all letters which map 
        // the next available digit
        let digit = next_digits.substring(0, 1);
        let letters = letterMap.get(digit);
        for (let i = 0; i < letters.length; i++) {
            let letter = letterMap.get(digit).substring(i, i + 1);
            // append the current letter to the combination
            // and proceed to the next digits
            backtrack(combination + letter, next_digits.substring(1));
        }
    }
}
console.log(letterCombinations('23'));