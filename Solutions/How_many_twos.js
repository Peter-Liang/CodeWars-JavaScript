/**
 * How many twos
 * http://www.codewars.com/kata/56aed5db9d5cb55de000001c/train/javascript
 */


function twoCount(n) {
    var count = 0;
    while (n > 0 && n % 2 === 0) {
        n /= 2;
        count++;
    }
    return count;
}

module.exports = twoCount;
