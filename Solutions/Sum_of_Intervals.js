/**
 * Sum of Intervals
 * http://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript
 */

function sumIntervals(intervals) {
    var intervalSet = new Set();
    intervals.forEach(interval => {
        for (var i = interval[0]; i < interval[1]; i++) {
            intervalSet.add(i);
        }
    });

    return intervalSet.size;
}
