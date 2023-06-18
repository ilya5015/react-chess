import Figure from "./Figure";

class Rook extends Figure {
    readonly cell: Cell;
    readonly color: string;

    constructor(cell, color) {
        super(cell, color);

    }
}

export default Rook;