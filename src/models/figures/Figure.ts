import Cell from "../Cell";

class Figure {
    readonly cell: Cell;
    readonly color: string;
    readonly pic: null | object;

    constructor(cell, color) {
        this.cell = cell;
        this.color = color;
        this.cell.figure = this;

        this.pic = null;
    }
}

export default Figure;