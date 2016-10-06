//  Count B’s

var countBs = function (a) {
    var k;
    var count = 0;
    var c = a.length;
    for (var i = 0; i <= c - 1; i++) {
        k = a.charAt(i);
        console.log(k);
        if (k == "b" || k == "B") {
            count += 1;
        }
    }
    return count;
};
console.log(countBs("BBC"));