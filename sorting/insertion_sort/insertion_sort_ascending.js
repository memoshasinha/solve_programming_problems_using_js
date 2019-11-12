/**
 * Insertion sort
 */
var insertionSortAscending = function(arr) {
    if(arr != undefined && arr.length == 0){
       return new Error("array cannot be null");
    }
    let arrLength = arr.length;
    for(let j=1;j<arrLength;j++){
        let key = arr[j];
        let i=j-1;
        while(i>=0 && arr[i] > key){
            arr[i+1]=arr[i];
            i=i-1;
        }
        arr[i+1]= key;
    }
    return arr;
};
module.exports = insertionSortAscending;
