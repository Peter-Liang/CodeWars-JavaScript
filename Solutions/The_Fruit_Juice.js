/**
 * The Fruit Juice
 * http://www.codewars.com/kata/5264603df227072e6500006d/train/javascript
 */

function Jar() {}

Jar.prototype.add = function(amount, type) {
    this[type] = this[type] | 0;
    this[type] += amount;
};

Jar.prototype.pourOut = function(amount) {
    var total = this.getTotalAmount();
    var percentage = (total - amount) / total;
    for (type in this) {
        if (this.hasOwnProperty(type)) {
            this[type] *= percentage;
        }
    }
};

Jar.prototype.getTotalAmount = function() {
    var total = 0;
    for (type in this) {
        if (this.hasOwnProperty(type)) {
            total += this[type];
        }
    }
    return total;
};

Jar.prototype.getConcentration = function(type) {
    var amount = this[type] || 0,
        total = this.getTotalAmount();

    return total === 0 ? 0 : amount / total;
}