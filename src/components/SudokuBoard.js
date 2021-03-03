import React, { Component } from "react";
import SudokuField from "./SudokuField";
import Timer from "./timer";
import Result from "./result";
import Errors from "./errors";

export default class SudokuBoard extends Component {
  render() {
    const { sudoku, onChange } = this.props;

    return (
      <div className="con">
        <div className="timer">
        {!sudoku.solveTime && <Timer start={sudoku.startTime} />}
        {sudoku.solveTime && <Result sudoku={sudoku} />}
        </div>
        {sudoku.rows.map(row => (
          <div className="row" key={row.index}>
            {row.cols.map(field => (
              <SudokuField field={field} key={field.col} onChange={onChange} sudoku={sudoku.state}/>
            ))}
          </div>
        ))}
        {!sudoku.solveTime && <Errors sudoku={sudoku} />}
      </div>
    );
  }
}