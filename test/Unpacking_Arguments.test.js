var spread = require('../Solutions/Unpacking_Arguments.js')
require('should');

describe('should work', function() {
    it('apply', function() {
        spread(function(x, y) {
            return x + y
        }, [1, 2]).should.equal(3);
    });
});
