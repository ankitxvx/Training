"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter number:\n');
    var operator = (0, readline_sync_1.question)('Enter Operator:\n');
    var secondStr = (0, readline_sync_1.question)('Enter Second number:\n');
    var firstNum = isNumber(firstStr);
    console.log(firstNum);
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
