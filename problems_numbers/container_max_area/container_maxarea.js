/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i =0; j=0;
    if(height === null){
        return 0;
    }
    else{
        j=height.length-1;
    }
        
    let area = 0, maxArea = 0;
    while(i<j){
        maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j-i));
        if (height[i] < height[j])
                i++;
            else
                j--;
    }
    return maxArea;
};
module.exports = maxArea;
