/**
 * Unpacking Arguments
 * http://www.codewars.com/kata/540de1f0716ab384b4000828
 */

module.exports = spread;

function spread(func, args) {
    return func.apply(null, args);
}
