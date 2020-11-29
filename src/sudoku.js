"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var board = new Array();
printBoard(board);
for (var i = 0; i < 9; i++) {
    board[i] = new Array();
    for (var j = 0; j < 9; j++) {
        board[i][j] = i * 9 + (j + 1);
    }
}
console.log('default');
printBoard(board);
console.log(board[0]);
var test_json_1 = __importDefault(require("./data/test.json"));
var pazzle = importPazzle('data', 1);
console.log(pazzle);
//method
function printBoard(board) {
    console.log(board);
}
function importPazzle(key, id) {
    console.log(key, id);
    console.log(test_json_1.default.data[id]);
    var data = test_json_1.default.data[id];
    var pazzleData = data.split('').map(function (x) { return parseInt(x); });
    return pazzleData;
}
