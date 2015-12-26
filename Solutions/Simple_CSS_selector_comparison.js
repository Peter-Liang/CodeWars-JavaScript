/**
 * Simple CSS selector comparison
 * http://www.codewars.com/kata/5379fdfad08fab63c6000a63/train/javascript
 */

function compare(a, b) {
    var getSpecificity = function(selector) {
        var count = function(regex, str) {
            var result = (str || selector).match(regex);
            return result ? result.length : 0;
        };

        return {
            id: count(/#/g),
            cls: count(/\./g),
            tag: selector.split(' ')
                .map(s => count(/^(?!\.)\w+/, s))
                .reduce((a, b) => a + b)
        };
    };

    var specA = getSpecificity(a);
    var specB = getSpecificity(b);

    if (specA.id !== specB.id) {
        return specA.id > specB.id ? a : b;
    }
    if (specA.cls !== specB.cls) {
        return specA.cls > specB.cls ? a : b;
    }
    if (specA.tag !== specB.tag) {
        return specA.tag > specB.tag ? a : b;
    }

    return b
}
