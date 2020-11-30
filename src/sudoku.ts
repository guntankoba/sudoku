import testData from './data/test.json'

// マスに入る値
type NUM = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"



class Board {
    /*
    * Sudoku Board class
    *  9x9 list
    */

    //propaty
    data: number[]
    dataMatrix: number[][]
    
    constructor(private key: string, private id: number) {
        this.data = this.importData(this.key, this.id) 
        this.dataMatrix = this.transferMatrix(this.data)
    }

    // private method
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

    private importData(key: string , id: number){
        // get nubmerlist from jsonfile
        console.log(key, id)
        console.log(testData.data[id])
        const data: string = testData.data[id]
        const pazzleData: number[] = data.split('').map(x => parseInt(x))
        return pazzleData
    }

    // get method    
    getRow(y_index: number): number[]{
        return this.dataMatrix[y_index]
    }
    
    getColumn(x_index: number): number[]{
        return this.dataMatrix.map(x => x[x_index])
    }

    getSquare(x_index: number, y_index: number): number[]{
        // 指定したインデックスの属するスクエアのリストにして返す
        /*
        list index sample
        |0|1|2|
        |3|4|5|
        |6|7|8|
        */
        const x_position = Math.floor(x_index / 3);
        const y_position = Math.floor(y_index / 3);
        let square = new Array();
        for (let y = 0; y < 9; y++) {
            if (Math.floor(y / 3) == y_position){
                for (let x = 0; x < 9; x++){
                    if (Math.floor(x / 3) == x_position){
                        square.push(this.dataMatrix[y][x])
                    }
                }
            }
        }
        return square
    }

    printData() {
        const dataMatrix= this.transferMatrix(this.data)
        console.log(dataMatrix)     
    }

    checkCurrentBox(x_index: number, y_index: number) {
        //position: 0 < x_index< 8, 0 < y_index< 8
        // 数独での直感的な向きにして出力
        const position: number = x_index+ y_index * 9
        console.log('Index['+x_index+':'+y_index+'] Number is '+ this.data[position])
        
        
    }

}

const b = new Board('data', 1)
b.printData()
b.checkCurrentBox(8,2)
console.log(b.getRow(1))
console.log(b.getColumn(1))
console.log(b.getSquare(8,0))
console.log(b.getSquare(0,0))
