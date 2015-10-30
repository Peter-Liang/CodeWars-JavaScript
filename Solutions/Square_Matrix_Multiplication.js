/**
 * Square Matrix Multiplication
 * http://www.codewars.com/kata/5263a84ffcadb968b6000513/train/javascript
 */

function matrixMultiplication(a, b) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        var row = [];
        for (var j = 0; j < a.length; j++) {
            var column = 0;
            for (var k = 0; k < a.length; k++) {
                column += a[i][k] * b[k][j];
            };
            row.push(column);
        };
        result.push(row);
    };
    return result;
}