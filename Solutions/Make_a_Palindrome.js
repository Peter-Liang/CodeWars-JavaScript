/**
 * Make a Palindrome
 * http://www.codewars.com/kata/53629117f81a7f9b9e000d1e/train/javascript
 */

function makePalindrome(text) {
    var reverseString = s => s.split('').reverse().join(''),
        isPalidrome = function(s) {
            for (var i = 0; i < Math.floor(s.length / 2); i++) {
                if (s[i] !== s[s.length - 1 - i]) {
                    return false;
                }
            }

            return true;
        };

    for (var i = 0; i < text.length - 1; i++) {
        if (isPalidrome(text.slice(i))) {
            return text + reverseString(text.slice(0, i));
        } else if (isPalidrome(text.slice(0, text.length - i))) {
            return reverseString(text.slice(text.length - i)) + text;
        }
    }

    return text + reverseString(text.slice(0, -1));
}
