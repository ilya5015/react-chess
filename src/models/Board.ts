import Cell from "./Cell";


class Board {
    public cells: Array<any> = [];

    public initCells() {
        let rows = [];
        for (let i = 0; i < 8; i++) {
            let column = [];
            for (let k = 0; k < 8; k++) {
                if (i % 2 === 0) {
                    if (k % 2 === 0) {
                        column.push(new Cell(i, k, 'white'));
                    } else {
                        column.push(new Cell(i, k, 'black'));
                    }
                } else {
                    if (k % 2 === 0) {
                        column.push(new Cell(i, k, 'black'));
                    } else {
                        column.push(new Cell(i, k, 'white'));
                    }
                }

            }
            rows.push(column)
        }
        this.cells = rows;
    }
}

export default Board