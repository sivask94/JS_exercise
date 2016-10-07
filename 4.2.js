//  Reversing the array

function reverseArray(arr) {
    var reversedArray = [];
    var array = arr;
    console.log(array)
    var len = array.length;
    for (var i = len - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);

    }
    return reversedArray;
}
console.log(reverseArray([3, 2, 5, 4, 1, 5]));
