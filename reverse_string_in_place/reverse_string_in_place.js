/**
 * Reverse String in-place Link
https://www.geeksforgeeks.org/reverse-words-in-a-given-string/
 */

 function reverse_string_in_place(originalString){
    let reversedString = '';
    if(originalString.length === 0) return new Error("Array cannot be of Zero length");
    let arr = originalString.split(' ');
    if (arr.length === 0) return new Error("Array cannot be of Zero length");
    for(let i = arr.length-1;i>=0;i--){
        if( arr[i] == ' '){
            reversedString.split('').reverse();
            reversedString+=' ';
        }
        else{
            reversedString += arr[i] + ' '; 
        }
    }
    return reversedString;
 }
 module.exports = reverse_string_in_place;
 //let originalString = "geeks quiz practice code";
 //console.log(originalString);
 //console.log(reverse_string_in_place(originalString));