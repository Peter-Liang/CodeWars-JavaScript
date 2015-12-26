/**
 * Valid Parentheses
 * http://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
 */

function validParentheses(parens) {
    var openParenthesesCount = 0;
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] === '(') {
            openParenthesesCount++;
        } else {
            if (openParenthesesCount === 0) {
                return false;
            }
            openParenthesesCount--;
        }
    }

    return openParenthesesCount === 0;
}
