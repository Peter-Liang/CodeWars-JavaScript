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

    const result = [];
    result.push(LCS(x, y.slice(0, -1)));
    result.push(LCS(x, y.slice(1)));
    result.push(LCS(x.slice(0, -1), y));
    result.push(LCS(x.slice(1), y));

    const l = result.reduce((p, v) => p.length > v.length ? p : v, '');
    return l;
}

console.log(LCS('anothertest', 'notatest'))
