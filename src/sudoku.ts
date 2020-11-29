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

class Board {
    //propaty
    data: number[]

    constructor(private key: string, private id: number) {
        this.data = this.importData(this.key, this.id) 
    }

    private transferMatrix(array: number[]): number[][] {
        let dataMatrix = new Array();
        let s = 0;
        for (let i = 0; i < 9; i++) {
            dataMatrix[i] = new Array();
            for (let j=0; j < 9; j++) {
                dataMatrix[i][j] = this.data[s];
                s ++;
            }
        }
        return dataMatrix
    }

    printData() {
        const dataMatrix = this.transferMatrix(this.data)
        console.log(dataMatrix)
        
    }

    private importData(key: string , id: number){
        // get nubmerlist from jsonfile
        console.log(key, id)
        console.log(testData.data[id])
        const data: string = testData.data[id]
        const pazzleData: number[] = data.split('').map(x => parseInt(x))
        return pazzleData
    }
}

const b = new Board('data', 1)
b.printData()