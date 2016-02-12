/**
 * Count IP Addresses
 * http://www.codewars.com/kata/526989a41034285187000de4/train/javascript
 */

function ipsBetween(start, end) {
    var startArr = start.split('.'),
        endArr = end.split('.'),
        result = 0,
        factor = 1;
    for (var i = startArr.length - 1; i >= 0; i--, factor *= 256) {
        result += (endArr[i] - startArr[i]) * factor;
    }

    return result;
}
