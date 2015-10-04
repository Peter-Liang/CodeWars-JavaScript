/**
 * Easy mathematical callback
 * http://www.codewars.com/kata/54b7c8d2cd7f51a839000ebf/train/javascript
 */

function processArray(arr, callback) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = callback(arr[i]);
	}
	return arr;
}