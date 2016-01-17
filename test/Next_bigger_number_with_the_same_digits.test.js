var nextBigger = require('../Solutions/Next_bigger_number_with_the_same_digits.js');

describe('nextBigger', function() {
    var should = require('should');
    it('Small numbers', function() {
        nextBigger(12).should.equal(21);
        nextBigger(513).should.equal(531);
        nextBigger(2017).should.equal(2071);
        nextBigger(414).should.equal(441);
        nextBigger(144).should.equal(414);
    });

    it('Bigger numbers', function() {
        nextBigger(123456789).should.equal(123456798);
        nextBigger(1234567890).should.equal(1234567908);
        nextBigger(9876543210).should.equal(-1);
        nextBigger(9999999999).should.equal(-1);
        nextBigger(59884848459853).should.equal(59884848483559);
    });
});
