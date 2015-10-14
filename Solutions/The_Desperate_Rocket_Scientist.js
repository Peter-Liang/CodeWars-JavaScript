/**
 * The Desperate Rocket Scientist
 * http://www.codewars.com/kata/52a224d9e6d7a078200007b2/train/javascript
 */

// This code will run before the rocket starts
function fix_countdown() {
	delete Array.prototype.Dammit;
}

// Jim's final countdown function;
// may not be changed any more.
// (It used to work the day before!)
function countdown() {
  var ret = "";
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (var number in numbers) {
    if (ret) ret += ", ";
    if (number < 10)
      number = 10 - number;
    else if (number == 10)
      number = "Zero";
    ret += number;
  }
  ret += "!";
  return ret;
}