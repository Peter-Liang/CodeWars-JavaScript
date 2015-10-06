/**
 * Unary function chainer
 * http://www.codewars.com/kata/54ca3e777120b56cb6000710/train/javascript
 */
function chained(functions) {
	return function(n) {
		functions.forEach(function(f) {
			n = f(n);
		});
		return n;
	};
}