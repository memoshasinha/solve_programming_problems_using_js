var merge = function (nums1, m, nums2, n) {
    var insertPos = m + n - 1;
    m--;
    n--;
    while(n>=0){
        nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
    }
    return nums1;
};
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));