//  Count the mentioned Letter in a word

var countBs = function (a, r) {
    var k;
    var count = 0;
    var c = a.length;
    for (var i = 0; i <= c - 1; i++) {
        k = a.charAt(i);
        if (k == r) {
            count += 1;
        }
    }
    return count;
};
console.log(countBs("BBC", "C"));
console.log(countBs("kakkerlak", "k"));
