/**
 * WeIrD StRiNg CaSe
 * http://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
 */

function toWeirdCase(string) {
    return string.split(' ')
        .map(word => word.split('')
            .map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase())
            .join('')
        )
        .join(' ');
}