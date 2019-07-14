/*In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.
Each order is represented by an "order id" (an integer).
We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

For example:

  const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
Here are some edge cases:

One or both of our input arrays is 0 elements or 1 element
One of our input arrays is longer than the other.
One of our arrays runs out of elements before we're done merging.

If both arrays are empty, we're fine. But for all the other edge cases, at some point firstUnmergedMine 
or firstUnmergedAlices will be undefined because there won't be an element at one of those indices. 
Then JavaScript will compare undefined with a number, which will always be false,
 and mergedArray might be out of order or contain undefined!
*/

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
//console.log(numbers);
const arr1 = [3, 4, 6, 10, 11, 15];
const arr2 = [1, 5, 8, 12, 14, 19];


console.log(mergeArrays(arr1,arr2));

function mergeArrays(myArray, alicesArray) {

    // Set up our mergedArray
    const mergedArray = [];
  
    let currentIndexAlices = 0;
    let currentIndexMine = 0;
    let currentIndexMerged = 0;
  
    while (currentIndexMerged < (myArray.length + alicesArray.length)) {
  
      const isMyArrayExhausted = currentIndexMine >= myArray.length;
      const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;
  
      // Case: next comes from my array
      // My array must not be exhausted, and EITHER:
      // 1) Alice's array IS exhausted, or
      // 2) The current element in my array is less
      //    than the current element in Alice's array
      if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
        (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {
  
        mergedArray[currentIndexMerged] = myArray[currentIndexMine];
        currentIndexMine++;
  
        // Case: next comes from Alice's array
      } else {
        mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
        currentIndexAlices++;
      }
  
      currentIndexMerged++;
    }
  
    return mergedArray;
  }