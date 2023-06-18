import { useEffect, FC } from "react";
import "./BoardComponent.css";
import Board from "../../models/Board";

interface BoardComponentPropsType {}

const BoardComponent = (): FC<BoardComponentPropsType> => {
  useEffect(() => {
    const board = new Board();
    board.initCells();
    console.log("board", board.cells);
  }, []);

  return <div className="board"></div>;
};

export default BoardComponent;
