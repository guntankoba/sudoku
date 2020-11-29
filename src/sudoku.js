"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_json_1 = __importDefault(require("./data/test.json"));
var Board = /** @class */ (function () {
    function Board(key, id) {
        this.key = key;
        this.id = id;
        this.SQUARE_POSITION = [];
        this.data = this.importData(this.key, this.id);
        this.dataMatrix = this.transferMatrix(this.data);
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
    Board.prototype.importData = function (key, id) {
        // get nubmerlist from jsonfile
        console.log(key, id);
        console.log(test_json_1.default.data[id]);
        var data = test_json_1.default.data[id];
        var pazzleData = data.split('').map(function (x) { return parseInt(x); });
        return pazzleData;
    };
    Board.prototype.getRow = function (y_index) {
        return this.dataMatrix[y_index];
    };
    Board.prototype.getColumn = function (x_index) {
        return this.dataMatrix.map(function (x) { return x[x_index]; });
    };
    Board.prototype.getSquare = function (x_index, y_index) {
        // xが0-2, yも0-2
        // 0,1,2,9,10,11,18,19,20
        // x 8, y 2
        var x_position = Math.floor(x_index / 3);
        var y_position = Math.floor(y_index / 3);
        var square = new Array();
        for (var y = 0; y < 9; y++) {
            if (Math.floor(y / 3) == y_position) {
                for (var x = 0; x < 9; x++) {
                    if (Math.floor(x / 3) == x_position) {
                        square.push(this.dataMatrix[y][x]);
                    }
                }
            }
        }
        return square;
    };
    Board.prototype.printData = function () {
        var dataMatrix = this.transferMatrix(this.data);
        console.log(dataMatrix);
    };
    Board.prototype.checkCurrentBox = function (x_index, y_index) {
        //position: 0 < x_index< 8, 0 < y_index< 8
        // 数独での直感的な向きにして出力
        var position = x_index + y_index * 9;
        console.log('Index[' + x_index + ':' + y_index + '] Number is ' + this.data[position]);
    };
    return Board;
}());
var b = new Board('data', 1);
b.printData();
b.checkCurrentBox(8, 2);
console.log(b.getRow(1));
console.log(b.getColumn(1));
console.log(b.getSquare(8, 0));
console.log(b.getSquare(0, 0));
