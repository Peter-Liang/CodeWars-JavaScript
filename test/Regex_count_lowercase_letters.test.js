var lowercaseCount = require('../Solutions/Regex_count_lowercase_letters.js');
require('should');

describe('Regex count lowercase letters', function() {
    it('should work', function() {
        lowercaseCount('abc').should.equal(3);
        lowercaseCount('abcABC123').should.equal(3);
        lowercaseCount('abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~').should.equal(3);
        lowercaseCount('').should.equal(0)
        lowercaseCount('ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~').should.equal(0)
        lowercaseCount('abcdefghijklmnopqrstuvwxyz').should.equal(26);
    });
});
