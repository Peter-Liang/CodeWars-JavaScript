/**
 * Longest Common Subsequence
 * http://www.codewars.com/kata/52756e5ad454534f220001ef/train/javascript
 */

function LCS(x, y) {
    if (!x || !y) {
        return '';
    }

    if (x[0] === y[0]) {
        return x[0] + LCS(x.slice(1), y.slice(1));
    }

    if (x.slice(-1) === y.slice(-1)) {
        return LCS(x.slice(0, -1), y.slice(0, -1)) + x.slice(-1);
    }

    const table = [];
    for (let r = 0; r < x.length; r++) {
        const row = [];
        table.push(row);
        for (let c = 0; c < y.length; c++) {
            let current = (r > 0 && table[r - 1][c]) || '';
            const lastColumn = (c > 0 && table[r][c - 1]) || '';
            if (current.length < lastColumn.length) {
                current = lastColumn;
            }
            if (x[r] === y[c]) {
                current = ((r > 0 && c > 0 && table[r - 1][c - 1]) || '') + x[r];
            }
            row.push(current);
        }
    }
    return table.pop().pop();
}

console.log(LCS('anothertest', 'notatest'))
console.log(LCS('finaltest', 'zzzfinallyzzz'))
