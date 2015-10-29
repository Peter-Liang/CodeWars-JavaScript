/**
 * Grouped by commas
 * http://www.codewars.com/kata/5274e122fc75c0943d000148/train/javascript
 */
function groupByCommas(n) {
	var result = n.toString();

	for (var i = result.length - 3; i > 0; i -= 3) {
		result = result.slice(0, i) + ',' + result.slice(i);
	}

	return result;
}