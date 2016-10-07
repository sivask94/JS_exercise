//  Sum of a given range

var range = function (start, end) {
    var array = [];
    var startVal = start - 1;
    var endVal = end;
    len = endVal - startVal;
    for (var i = 0; i < len; i++) {
        startVal += 1;
        array.push(startVal);
    }
    return array;
};
var sum = function (array) {
    var sum = 0;
    for (var k = 0; k < len; k++) {
        sum = sum + array[k];
    }
    return sum;
};
console.log(sum(range(36, 40)));

// For range explore array.map
// For sum check out array.reduce
