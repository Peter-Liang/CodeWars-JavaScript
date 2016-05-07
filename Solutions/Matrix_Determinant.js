/**
 * Matrix Determinant
 * http://www.codewars.com/kata/52a382ee44408cea2500074c/train/javascript
 */

function determinant(m) {
    if (m.length === 1) {
        return m[0][0];
    }

    if (m.length === 2) {
        return m[0][0] * m[1][1] - m[0][1] * m[1][0];
    }

    let result = 0;
    for (let i = 0; i < m.length; i++) {
        let minor = [];
        for (var r = 1; r < m.length; r++) {
            let row = [];
            minor.push(row);
            for (var c = 0, len = m.length; c < len; c++) {
                if (i === c) continue;
                row.push(m[r][c]);
            }
        }
        result += Math.pow(-1, (i % 2)) * m[0][i] * determinant(minor);
    }
    return result;
}

let m1 = [
    [1, 3],
    [2, 5]
];
let m2 = [
    [2, 5, 3],
    [1, -2, -1],
    [1, 3, 4]
];

console.log(determinant([
    [1]
]));
console.log(determinant(m1));
console.log(determinant(m2));
