/**
 * Last digit of a large number
 * http://www.codewars.com/kata/5511b2f550906349a70004e1/train/javascript
 */

var lastDigit = function(str1, str2) {
    var base = parseInt(str1.slice(-1), 10),
        index = parseInt(str2.slice(-2), 10),
        getPow = function(base, index) {
            if (base === 1) {
                return 1;
            }
            if (index > 1) {
                return index % 2 === 0 ? getPow((base * base) % 10, index / 2) : (getPow(base, index - 1) * base) % 10;
            }

            return base;
        };

    if (parseInt(str2, 10) === 0) {
        return 1;
    }

    return getPow(base, index);
}
