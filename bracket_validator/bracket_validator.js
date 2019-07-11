/*Problem Statement:  -
You're new to Javascript and your code won't run because the braces, brackets, and parentheses are off. 
To find out the syntax error you dec
ide to write a braces/brackets/parentheses validator.*/
const Stack = require('../stack/Stack');
var tokens = [ ['{','}'] , ['[',']'] , ['(',')'] ];
function isParanthesis(char) {
    var str = '{}[]()';
    if (str.indexOf(char) > -1) {
        return true;
    } else {
        return false;
    }
}

function isOpenParenthesis(parenthesisChar) {
    for (var j = 0; j < tokens.length; j++) {
        if (tokens[j][0] === parenthesisChar) {
            return true;
        }
    }
    return false;
}

function matches(topOfStack, closedParenthesis) {
    for (var k = 0; k < tokens.length; k++) {
        if (tokens[k][0] === topOfStack &&
            tokens[k][1] === closedParenthesis) {
            return true;
        }
    }
    return false;
}

function validate_bracket(bracket) {
    if (bracket.length === 0) return new Error("String cannot be of zero length");

    var resultStack = new Stack();
    for (let i = 0; i < bracket.length; i++) {
        let currSymbol = bracket.charAt(i);
        console.log(currSymbol);
        if (isParanthesis(currSymbol)) {
            if (isOpenParenthesis(currSymbol)) {
                resultStack.push(currSymbol);
            } else {
                if (resultStack.length === 0) {
                    return false;
                }
                var top = resultStack.pop(); 
                if (!matches(top, currSymbol)) {
                    return false;
                }
            }
        }
    }
    var returnValue = resultStack.size() === 0 ? true : false;
    return returnValue;
}
module.exports = validate_bracket;