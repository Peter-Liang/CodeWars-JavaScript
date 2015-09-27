//Triangular Treasure
//http://www.codewars.com/kata/525e5a1cb735154b320002c8/train/javascript

function triangular(n) {
	if (n < 1) {
		return 0;
	}

	var sum = 0;
	while (n > 0) {
		sum += n--;
	}
	return sum;
}