/**
 * Counting Change Combinations
 * http://www.codewars.com/kata/541af676b589989aed0009e7/train/javascript
 */

var countChange = function(money, coins) {
    if (coins.length === 0) {
        return 0;
    }

    coins = coins.slice(0).sort();
    var result = 0,
        largestCoin = coins.pop(),
        maxCount = 0;
    var maxRemain = money % largestCoin;

    if (maxRemain === 0) {
        result++;
        maxCount = money / largestCoin - 1;
    } else {
        maxCount = (money - maxRemain) / largestCoin;
    }

    for (var i = maxCount; i >= 0; i--) {
        result += countChange(money - largestCoin * i, coins);
    }

    return result;
}
