/**
 * Maximum subarray sum
 * http://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
 */

var maxSequence = function(arr) {
    if (arr.length === 0) return 0;
    if (arr.every(i => i <= 0)) return 0;

    var loopForMax = function(arr, index) {
        var max = 0,
            current = 0;
        for (var i = index; i < arr.length; i++) {
            current += arr[i];
            if (current > max) {
                max = current;
            }
        }

        return max;
    };

    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) continue;

        var current = loopForMax(arr, i);
        if (current > max) {
            max = current;
        }
    };
    return max;
};