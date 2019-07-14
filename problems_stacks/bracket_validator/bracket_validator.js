/*Problem Statement:  -
You're new to Javascript and your code won't run because the braces, brackets, and parentheses are off. 
To find out the syntax error you decide to write a braces/brackets/parentheses validator.*/

let Stack = require('../../common_ds/stack/stack');

let tokens = [
    ['{', '}'],
    ['[', ']'],
    ['(', ')']
];
let openBrackets = [];
/**
 * Initialise the openParanthesis set
 */
function initialiseOpenParanthesisValues() {
    tokens.map(values => {
        openBrackets.push(values[0]);
    });
}
/**
 * Check if the value passed is open paranthesis
 * @param {*} value 
 */
function isOpenParanthesis(value) {
    initialiseOpenParanthesisValues();
    return value.length !== 0 ? openBrackets.includes(value) : new Error("open paranthesis cannot be of zero length");
}
/**
 * Check if the value passed is paranthesis
 * @param {*} char 
 */
function isParanthesis(value) {
    var str = '{}[]()';
    if (str.indexOf(value) > -1) {
        return true;
    } else {
        return false;
    }
}
/**
 * Matches the top of stack with the closed Parenthesis and if the pair looks correct then it returns true else false
 * @param {*} topOfStack 
 * @param {*} closedParenthesis 
 */
function matches(topOfStack, closedParenthesis) {
    for (var k = 0; k < tokens.length; k++) {
        if (tokens[k][0] === topOfStack &&
            tokens[k][1] === closedParenthesis) {
            return true;
        }
    }
    return false;
}

function validateExpression(expression) {
    if (expression.length === 0) return new Error("Expression cannot be of zero length");
    let expressionStack = new Stack();
    expressionStack.clear();
    for (let char of expression) {
        if (isParanthesis(char)) {
            if (isOpenParanthesis(char)) {
                expressionStack.push(char);
            } else {
                let top = expressionStack.pop();
                if (!matches(top, char)) return "Invalid expression";
            }
        }
    }
    if (expressionStack.size() === 0) {
        return "Valid expression";
    }
}

module.exports = validateExpression;
