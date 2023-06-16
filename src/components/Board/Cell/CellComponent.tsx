import "./CellComponent.css";

type CellPropsType = {
  coordX: string;
  coordY: number;
};

const CellComponent = ({ coordX, coordY, color }: CellPropsType) => {
  return <div className="cell" style={{ backgroundColor: color }}></div>;
};

export default CellComponent;
