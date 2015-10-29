/**
 * Bit Counting
 * http://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
 */
var countBits = function(n) {
    var count = 0;
    while (n > 0) {
        if (n & 1 === 1)
            count++;
        n >>= 1;
    }
    return count;
};

console.log(countBits(1234));