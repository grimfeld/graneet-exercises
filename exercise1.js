"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.money = void 0;
var money = function (amount, list) {
    var total = 0;
    while (amount > 0) {
        if (amount < list[list.length - 1])
            return -1;
        total = list.reduce(function (previous, current) {
            if (amount >= current) {
                amount -= current;
                return previous + 1;
            }
            return previous;
        }, 0);
    }
    return total;
};
exports.money = money;
//# sourceMappingURL=exercise1.js.map