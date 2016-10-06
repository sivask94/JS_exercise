//  Chess board

var a = "#";
var c = " ";
var b = "";

for (var i = 0; i < 8; i++) {
    for (var k = 0; k < 8; k++) {
        if ((i + k) % 2 == 0) {
            b += a;
        }
        else {
            b += c;
        }
    }
    b += "\n";
}
console.log(b);


// var ptn = "# # # # # # # ";
// var outputString = "";
//
// for (var i=0; i<=8; i++) {
//     if((i%2) === 0) {
//         outputString=" " + ptn;
//     } else {
//         outputString = ptn;
//     }
// }
//
// console.log(outputString);