const isPalindrome = require("./palindrome");

test('number is null',()=>{
    expect(isPalindrome('')).toStrictEqual(false);
});

test('number is palindrome',()=>{
    expect(isPalindrome(121)).toStrictEqual(true);
});

test('number is not a palindrome',()=>{
    expect(isPalindrome(-121)).toStrictEqual(false);
});