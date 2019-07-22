var three_sum = function (num) {
    if(!num) return undefined;
    const arr = num.sort((a, b) => a - b);
    let resultset = [];
    for (let i = 0; i < arr.length; ++i) {
        if (i != 0 && arr[i] == arr[i - 1]) continue;
        let j = i + 1, k = arr.length - 1;
        while (j < k) {
            if (arr[i] + arr[j] + arr[k] === 0) {
                resultset.push([arr[i], arr[j], arr[k]]);
                ++j;
                while (j < k && arr[j] == arr[j - 1]) ++j;
            }
            else if (arr[i] + arr[j] + arr[k] < 0) {
                j++;
            }
            else {
                k--;
            }
        }
    }
    return resultset;
};
module.exports = three_sum;
console.log(three_sum([-1, 0, 1, 2, -1, -4]));
