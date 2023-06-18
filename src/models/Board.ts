import Cell from "./Cell";
import Pawn from "./figures/Pawn";
import Rook from "./figures/Rook";


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
            rows.push(column);
        }
        this.cells = rows;
    }

    public initFigures() {
        this.addPawns();
        this.addKings();
        this.addQueens();
        this.addBishops();
        this.addKnights();
        this.addRooks();
    }

    //
    private addPawns() {
        for (let i = 0; i < 8; i++) {
            new Pawn(this.getCell(i, 1), 'black');
            new Pawn(this.getCell(i, 6), 'white');
        }
    }
    private addKings() {
        new Pawn(this.getCell(4, 0), 'black');
        new Pawn(this.getCell(4, 7), 'white');

    }
    private addQueens() {
        new Pawn(this.getCell(3, 0), 'black');
        new Pawn(this.getCell(3, 7), 'white');

    }
    private addBishops() {
        new Pawn(this.getCell(2, 0), 'black');
        new Pawn(this.getCell(5, 0), 'black');

        new Pawn(this.getCell(2, 7), 'white');
        new Pawn(this.getCell(5, 7), 'white');

    }
    private addKnights() {
        new Pawn(this.getCell(1, 0), 'black');
        new Pawn(this.getCell(6, 0), 'black');

        new Pawn(this.getCell(1, 7), 'white');
        new Pawn(this.getCell(6, 7), 'white');

    }
    private addRooks() {
        new Rook(this.getCell(0, 0), 'black');
        new Rook(this.getCell(7, 0), 'black');

        new Rook(this.getCell(0, 7), 'white');
        new Rook(this.getCell(7, 7), 'white');

    }
    //

    public getCell(coordX: number, coordY: number) {
        return this.cells[coordY][coordX];
    }
}

export default Board;