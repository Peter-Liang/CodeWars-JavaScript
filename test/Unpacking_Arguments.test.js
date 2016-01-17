var spread = require('../Solutions/Unpacking_Arguments.js')

describe('should work', function() {
    var should = require('should');
    it('apply', function() {
        function spread(func, args) {
            return func.apply(null, args);
        }
    });
});
