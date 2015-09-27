/*
Credit Card Mask
http://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
*/

function maskify(cc) {
	var len = cc.length;
	return len > 4 ? cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4) : cc;
}