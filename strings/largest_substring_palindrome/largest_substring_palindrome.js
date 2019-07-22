var largestPalindrome = function(str) {
    let left = 0, right = 0, temp = [];
    for(let i = 0; i< str.length;i++){
        left = i-1;
        right = i+1;
        while( str.charAt(left) === str.charAt(right)){
            left --;
            right++;
            if(left < 0 || right > str.length){
                break;
            }

        }
        temp[i] = right;
        if(right > str.length) break;
        i++;

    }
    console.log(temp);
}

console.log(largestPalindrome("civilwaretistsing"));