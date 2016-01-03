describe('defaultArguments', function() {
    var should = require('should');

    function add(a, b) {
        return a + b;
    }

    var defaultArguments = require('../Solutions/Default_Arguments.js').defaultArguments;
    var a = defaultArguments(add, {
        b: 5
    });

    it('should use default value', function() {
        a(3).should.equal(8);
    });

    var new_a = defaultArguments(a, {
        b: 6
    });

    it('should override default value', function() {
        new_a(4).should.equal(10);
    });

    it('should use arguments', function() {
        new_a(4, 10).should.equal(14);
    });

    it('should use default even undefined', function() {
        var undefined_a = defaultArguments(add, {
            a: 1,
            b: 2
        });
        undefined_a(undefined).should.be.NaN;
    });
});
