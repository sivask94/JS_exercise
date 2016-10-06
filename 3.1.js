//  Minimum function

var min = function (x, y) {
    var small, big;
    if (x < y) {
        small = x;
        big = y;
    }
    else {
        small = y;
        big = x;
    }
    return small;
    console.log(small);
};
console.log(min(0, -17));

