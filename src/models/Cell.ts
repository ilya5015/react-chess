import Figure from "./figures/Figure";

class Cell {
    coordX: number;
    coordY: number;
    color: string;
    figure: Figure | null;

    constructor(coordX: number, coordY: number, color: string) {
        this.coordX = coordX;
        this.coordY = coordY;
        this.color = color;
        this.figure = null;
    }
}

export default Cell