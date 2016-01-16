/**
 * Next bigger number with the same digits
 * http://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript
 */

module.exports = nextBigger;

function nextBigger(n) {
    var arr = n.toString().split('').map(e => parseInt(e, 10));
    for (var i = arr.length - 1; i >= 1; i--) {
        if (arr[i] > arr[i - 1]) {
            var minBigger = Math.min.apply(null, arr.slice(i).filter(e => e > arr[i - 1]));
            var tailArr = arr.slice(i - 1);
            tailArr.splice(tailArr.indexOf(minBigger), 1);
            tailArr.sort();
            var headArr = arr.slice(0, i - 1);
            headArr.push(minBigger);
            return parseInt(headArr.concat(tailArr).join(''), 10);
        }
    }

    return -1;
}
