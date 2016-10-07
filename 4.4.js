//      deep comparision
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    var a = 0, b = 0;
    for (var prop in obj1) {
        a += 1;
    }
    for (var prop in obj2) {
        b += 1;
        if (!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop]))
            return false;
    }
    return a == b;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));