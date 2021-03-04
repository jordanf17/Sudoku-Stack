import React,{ Component} from "react";
import { generateSudoku, checkSolution, shareUrl,checkInstance } from "./lib/sudoku";
import produce from "immer";
import SudokuBoard from "./components/SudokuBoard";
import Header from "./components/header/headerpage";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = produce({}, () => ({
      sudoku: generateSudoku()
    }));
  }

  handleChange = e => {
    this.setState(
      produce(state => {
        state.sudoku.rows[e.row].cols[e.col].value = e.value;
        const instance = checkInstance(state.sudoku,e.row,e.col,e.value)
        if (!state.sudoku.solvedTime) {
          const solved = checkSolution(state.sudoku);
          if (solved) {
            state.sudoku.solveTime = new Date();
            state.sudoku.shareUrl = shareUrl(state.sudoku);
          }
        }
      })
    );
  };

  solveSudoku = e => {
    this.setState(
      produce(state => {
        state.sudoku.rows.forEach(row =>
          row.cols.forEach(col => {
            col.value = state.sudoku.solution[col.row * 9 + col.col];
          })
        );
      })
    );
  };

  render() {
    return (
      <div className="App">
        
        <Header />
        <SudokuBoard sudoku={this.state.sudoku} onChange={this.handleChange} />

          {/* <button onClick={this.solveSudoku}>Solve it Magically!</button> */}
        <div className="btnc">  
        <p className="copy">&copy;JordanFurtado2021</p>
      </div>
      </div>

    );
  }
}

export default App;
