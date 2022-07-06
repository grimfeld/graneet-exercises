"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.counter = exports.decToBin = void 0;
var decToBin = function (dec) {
    if (dec === 0)
        return '0';
    var bin = '';
    var remainder = dec;
    while (remainder > 0) {
        bin = (remainder % 2) + bin;
        remainder = Math.floor(remainder / 2);
    }
    return bin;
};
exports.decToBin = decToBin;
var counter = function (dec) {
    var bin = decToBin(dec);
    var count = 0;
    var max = bin.split('').reduce(function (previous, current) {
        count = current === '0' ? count + 1 : 0;
        return count > previous ? count : previous;
    }, 0);
    return max;
};
exports.counter = counter;
counter(0);
//# sourceMappingURL=exercise2.js.map