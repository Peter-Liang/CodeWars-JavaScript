/**
 * Default Arguments
 * http://www.codewars.com/kata/52605419be184942d400003d/train/javascript
 */

function defaultArguments(func, params) {
    var argumentNames;
    if (func.toString === Function.toString) {
        var fnStr = func.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, '');
        argumentNames = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(/([^\s,]+)/g) || [];
    } else {
        argumentNames = func.toString();
    }

    var funcWithDefaultArguments = function() {
        var args = [];
        for (var i = 0; i < argumentNames.length; i++) {
            if (params && params.hasOwnProperty(argumentNames[i]) && arguments.length <= i) {
                args.push(params[argumentNames[i]]);
            } else {
                args.push(arguments[i])
            }
        }
        return func.apply(null, args);
    };

    funcWithDefaultArguments.toString = function() {
        return argumentNames;
    };

    return funcWithDefaultArguments;
}

module.exports = {
    defaultArguments: defaultArguments
};
