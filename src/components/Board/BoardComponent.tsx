import { useEffect } from "react";
import "./BoardComponent.css";
import Board from "../../models/Board";

const BoardComponent = () => {
  useEffect(() => {
    const board = new Board();
    board.initCells();
    console.log("board", board.cells);
  }, []);

  return <div className="board"></div>;
};

export default BoardComponent;
