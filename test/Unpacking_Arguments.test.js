var spread = require('../Solutions/Unpacking_Arguments.js')
require('should');

describe('Unpacking Arguments', function() {
    it('should work', function() {
        spread(function(x, y) {
            return x + y
        }, [1, 2]).should.equal(3);
    });
});
