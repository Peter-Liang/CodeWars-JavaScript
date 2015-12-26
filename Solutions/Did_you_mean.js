/**
 * Did you mean ...?
 * http://www.codewars.com/kata/5259510fc76e59579e0009d4/train/javascript
 */

function Dictionary(words) {
    this.words = words;
}

Dictionary.prototype.findMostSimilar = function(term) {
    var minDifference = Infinity,
        mostSimilar = '',
        getSimilarity = (word1, word2) => {
            var shorter = word1.length < word2.length ? word1 : word2,
                longer = word1.length > word2.length ? word1 : word2,
                getOrder = (shorter, longer) => {
                    var order = [];
                    shorter.split('').forEach(c => {
                        var index = longer.indexOf(c);
                        while (index !== -1 && order.some(i => i === index)) {
                            index = longer.slice(index + 1).indexOf(c);
                        }
                        order.push(index);
                    });
                    return order;
                },
                getMaxOrder = order => {
                    var getMaxSubOrder = (start, subOrder) => {
                        var maxSubOrder = 0;
                        subOrder.forEach((o, i) => {
                            if (start < o) {
                                maxSubOrder = Math.max(maxSubOrder, 1 + getMaxSubOrder(o, subOrder.slice(i + 1)));
                            }
                        });
                        return maxSubOrder;
                    };

                    return getMaxSubOrder(order[0], order.slice(1));
                };
            var difference = longer.length - shorter.length,
                order = getOrder(shorter, longer);
            var maxOrder = getMaxOrder(order);
            return difference + (order.length - maxOrder) * 2;

        };

    for (var word of this.words) {
        if (word == term) {
            return word;
        }

        var similarity = getSimilarity(term, word);
        if (similarity < minDifference) {
            minDifference = similarity;
            mostSimilar = word;
        }
    }

    return mostSimilar;
}

var a = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry', 'aeray']);
console.log(a.findMostSimilar('berry'));
// console.log(a.findMostSimilar('che'));
// console.log(a.findMostSimilar('rry'));

// var b = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
// console.log(b.findMostSimilar('javascript'));
// console.log(b.findMostSimilar('heaven'));

// console.log(['kqijoorfkejdcxr', 'ppctybxgtleipb', 'cwhyyzaorpvtnlfr', 'ajacizfrgxfumzpvi', 'nnsoamjkrzgldi', 'qojfrlhufr', 'tklquxrnhfiggb', 'hrwuhmtxxvmygb', 'xikoctmrhpvi', 'fgtrjakzlnaebxr', 'sefsknopiffajor', 'dyhxgviphoptak', 'xuwahveztwoor', 'loogviwcojxgvi', 'ntwmwwmicnjvhtt', 'tdvibqccxr', 'osbednerciaai', 'pxyousorusjxxbt', 'qifwqgdsijibor', 'hirldidcuzbyb', 'ljxzjjorwgb', 'npyrgrpbdfqhhncdi', 'zqdrhpviqslik', 'karpscdigdvucfr', 'xffrkbdyjveb', 'xrgdgqfrldwk', 'iqkyztorburjgiudi', 'afirbipbmkamjzw', 'ucxmdeudiycokfnb', 'clxmqmiycvidiyr', 'psaysnhfrrqgxwik', 'hwzsemiqxjwfk', 'iroezmixmberfr', 'lnjhrzfrosinb', 'fxjskybblljqr', 'cpnqknjyviusknmte', 'mhmkakybpczjbb', 'riyhpvimgaliuxr', 'pdyjrkaylryr', 'znystgvifufptxr', 'cfvruditwcxr', 'vkholxrvjwisrk', 'dihhiczkdwiofpr', 'eglanhfredaykxr', 'emvquxrvvlvwvsi', 'fxpvfhfrujjaifr', 'hkldhadcxrjbmkmcdi', 'ggcvrtxrtnafw', 'jhjyasikwyufr', 'jcocndjkyb'].length);
// var c = new Dictionary(['kqijoorfkejdcxr', 'ppctybxgtleipb', 'cwhyyzaorpvtnlfr', 'ajacizfrgxfumzpvi', 'nnsoamjkrzgldi', 'qojfrlhufr', 'tklquxrnhfiggb', 'hrwuhmtxxvmygb']);
// var c = new Dictionary(['kqijoorfkejdcxr', 'ppctybxgtleipb', 'cwhyyzaorpvtnlfr', 'ajacizfrgxfumzpvi', 'nnsoamjkrzgldi', 'qojfrlhufr', 'tklquxrnhfiggb', 'hrwuhmtxxvmygb', 'xikoctmrhpvi', 'fgtrjakzlnaebxr', 'sefsknopiffajor', 'dyhxgviphoptak', 'xuwahveztwoor', 'loogviwcojxgvi', 'ntwmwwmicnjvhtt', 'tdvibqccxr', 'osbednerciaai', 'pxyousorusjxxbt', 'qifwqgdsijibor', 'hirldidcuzbyb', 'ljxzjjorwgb', 'npyrgrpbdfqhhncdi', 'zqdrhpviqslik', 'karpscdigdvucfr', 'xffrkbdyjveb', 'xrgdgqfrldwk', 'iqkyztorburjgiudi', 'afirbipbmkamjzw', 'ucxmdeudiycokfnb', 'clxmqmiycvidiyr', 'psaysnhfrrqgxwik', 'hwzsemiqxjwfk', 'iroezmixmberfr', 'lnjhrzfrosinb', 'fxjskybblljqr', 'cpnqknjyviusknmte', 'mhmkakybpczjbb', 'riyhpvimgaliuxr', 'pdyjrkaylryr', 'znystgvifufptxr', 'cfvruditwcxr', 'vkholxrvjwisrk', 'dihhiczkdwiofpr', 'eglanhfredaykxr', 'emvquxrvvlvwvsi', 'fxpvfhfrujjaifr', 'hkldhadcxrjbmkmcdi', 'ggcvrtxrtnafw', 'jhjyasikwyufr', 'jcocndjkyb']);
// console.log(c.findMostSimilar('rkacypviuburk'));
