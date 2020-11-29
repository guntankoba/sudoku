let board: number[][] = new Array();
printBoard(board)
for (let i = 0; i < 9; i++) {
    board[i] = new Array();
    for (let j=0; j < 9; j++) {
        board[i][j] = i*9 + (j+1)
    }
}
console.log('default')
printBoard(board);

console.log(board[0])

import testData from './data/test.json'

let pazzle: number[] = importPazzle('data', 1)

console.log(pazzle)

//method
function printBoard(board: number[][]) {
    console.log(board);
}

function importPazzle(key: string , id: number){
    // get nubmerlist from jsonfile
    console.log(key, id)
    console.log(testData.data[id])
    const data: string = testData.data[id]
    const pazzleData: number[] = data.split('').map(x => parseInt(x))
    return pazzleData
}
