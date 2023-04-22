"use strict";
exports.__esModule = true;
// const sum = require("./sum.cts")
var sum_1 = require("./sum");
// const sum = require("./sum")
test('adds 1 + 2 to equal 3', function () {
    expect((0, sum_1.sum)(1, 2)).toBe(3);
});
