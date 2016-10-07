//      Lists
var arrayToList = function (array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
};

function listToArray(list) {
    var array = [];
    for (var i = list; i; i = i.rest) {
        array.push(i.value);
    }
    return array;
}

function prepend(value, list) {
    var list;
    list = {value: value, rest: list};
    return list;
}

function nth(list, idx) {
    var array = [];
    for (var i = list; i; i = i.rest) {
        array.push(i.value);
    }
    return array[idx];
}

console.log(arrayToList([10, 20, 30, 40]));
console.log(listToArray(arrayToList([10, 20, 30, 40])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
