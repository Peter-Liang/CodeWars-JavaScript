var twoCount = require('../Solutions/How_many_twos.js');
require('should');

describe('How many twos', function() {
    it('should work', function() {
        twoCount(24).should.equal(3);
        twoCount(17280).should.equal(7);
        twoCount(222222222222).should.equal(1);
        twoCount(256).should.equal(8);
        twoCount(0).should.equal(0);
        twoCount(1).should.equal(0);
        twoCount(2).should.equal(1);
        twoCount(256).should.equal(8);
        twoCount(7).should.equal(0);
        twoCount(84934656).should.equal(20);
    });
});
