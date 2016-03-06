/**
 * rainfall
 * http://www.codewars.com/kata/56a32dd6e4f4748cc3000006/train/javascript
 */

'use strict';

const towns = ['Rome', 'London', 'Paris', 'NY', 'Vancouver', 'Sydney', 'Bangkok', 'Tokyo', 'Beijing', 'Lima', 'Montevideo', 'Caracas', 'Madrid', 'Berlin'];

function calculateData(town, strng, calulateCallback) {
    if (!towns.some(t => t == town)) {
        return -1;
    }

    const allData = strng.split('\n');
    for (const data of allData) {
        if (data.indexOf(town) !== 0) {
            continue;
        }

        const monthlyData = data.replace(/[a-zA-Z\:\s]+/g, '')
            .split(',')
            .map(Number.parseFloat);
        return calulateCallback(monthlyData);
    }

    return -1;
}

function mean(town, strng) {
    return calculateData(town, strng, d => d.reduce((p, c) => p + c) / d.length);
}

function variance(town, strng) {
    const avg = mean(town, strng);
    return calculateData(town, strng, d => d.reduce((p, c) => p + Math.pow(c - avg, 2) , 0) / d.length);
}

module.exports = {
    mean: mean,
    variance: variance
}
