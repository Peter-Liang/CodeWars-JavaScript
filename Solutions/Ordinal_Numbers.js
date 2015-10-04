/**
 * Ordinal Numbers
 * http://www.codewars.com/kata/52dda52d4a88b5708f000024/train/javascript
 */

function ordinal(number, brief) {
	var ordin = {
		'1': "st",
		'2': "nd",
		'3': "rd",
	};

	var isTens = number >= 10 && number.toString().slice(-2, -1) === '1';
	if (isTens) {
		return 'th';
	};

	var lastDigit = number.toString().slice(-1);
	switch (lastDigit) {
		case '1':
			return ordin[lastDigit];
		case '2':
		case '3':
			return brief === true ? 'd' : ordin[lastDigit];
		default:
			return 'th';
	}
}