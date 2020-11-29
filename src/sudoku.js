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
//method
function printBoard(board) {
    console.log(board);
}
function importPazzle(key, id) {
    // get nubmerlist from jsonfile
    console.log(key, id);
    console.log(test_json_1.default.data[id]);
    var data = test_json_1.default.data[id];
    var pazzleData = data.split('').map(function (x) { return parseInt(x); });
    return pazzleData;
}
var Board = /** @class */ (function () {
    function Board(key, id) {
        this.key = key;
        this.id = id;
        this.data = this.importData(this.key, this.id);
    }
    Board.prototype.transferMatrix = function (array) {
        var dataMatrix = new Array();
        var s = 0;
        for (var i = 0; i < 9; i++) {
            dataMatrix[i] = new Array();
            for (var j = 0; j < 9; j++) {
                dataMatrix[i][j] = this.data[s];
                s++;
            }
        }
        return dataMatrix;
    };
    Board.prototype.printData = function () {
        var dataMatrix = this.transferMatrix(this.data);
        console.log(dataMatrix);
    };
    Board.prototype.importData = function (key, id) {
        // get nubmerlist from jsonfile
        console.log(key, id);
        console.log(test_json_1.default.data[id]);
        var data = test_json_1.default.data[id];
        var pazzleData = data.split('').map(function (x) { return parseInt(x); });
        return pazzleData;
    };
    return Board;
}());
var b = new Board('data', 1);
b.printData();
