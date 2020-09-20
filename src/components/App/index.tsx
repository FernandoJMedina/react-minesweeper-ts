import React, { useState } from "react";
import NumberDisplay from "../NumberDisplay";
import { generateCells } from "../../utils";
import "./App.scss";
import Button from "../Button";

const App = () => {
  const [cells, setCells] = useState(generateCells());

  const renderCells = (): React.ReactNode => {
    return cells.map((row, rowIdx) =>
      row.map((cell, colIdx) => (
        <Button
          key={`${rowIdx}-${colIdx}`}
          row={rowIdx}
          col={colIdx}
          state={cell.state}
          value={cell.value}
        />
      ))
    );
  };

  console.log(cells);
  return (
    <div className='App'>
      <div className='Header'>
        <NumberDisplay value={0} />
        <div className='Face'>
          <span role='img' aria-label='face'>
            😀
          </span>
        </div>
        <NumberDisplay value={23} />
      </div>
      <div className='Body'>{renderCells()}</div>
    </div>
  );
};

export default App;
