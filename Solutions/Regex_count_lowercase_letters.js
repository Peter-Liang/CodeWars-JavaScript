/** 
 * Regex count lowercase letters 
 * http://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript
 */


function lowercaseCount(str) {
    return (str.match(/[a-z]/g) || []).length;
}

module.exports = lowercaseCount;

