/**
 * Sum of Digits / Digital Root
 * http://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
 */
function digital_root(n) {
	while (n > 9) {
		n = n.toString().split('').reduce(function(res, c) {
			return res + parseInt(c, 10);
		}, 0);
	}
	return n;
}