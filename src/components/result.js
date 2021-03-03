import React, { Component } from "react";

export default class Result extends Component {
  render() {
    const { sudoku } = this.props;
    const elapsed = Math.floor(
      (sudoku.solveTime.getTime() - sudoku.startTime.getTime()) / 1000
    );
    let time
    let i
    if (elapsed<10)
    time="00:0"+elapsed
    else if(elapsed<60)
    time="00:"+elapsed
    else if(elapsed<600)
    {   i=Math.floor(elapsed/60) 
        if(elapsed%60<10)
        time="0"+i+":0"+elapsed%60
        else
        time="0"+i+":"+elapsed%60
    }
    else if(elapsed<6000)
    {   i=Math.floor(elapsed/60)
        if(elapsed%60<10)
        time=i+":0"+elapsed%60
        else
        time=i+":"+elapsed%60
    }
    const opponent = sudoku.challengerSolvedTime
      ? Math.floor(
          (sudoku.challengerSolvedTime.getTime() -
            sudoku.challengerStartTime.getTime()) /
            1000
        )
      : null;

    return (
      <div>
        <h2>You solved the sudoku in {time} with {sudoku.errors} errors</h2>
        {opponent && <h3>Your opponent solved it in {opponent} seconds</h3>}
        <p>
          Challenge a friend (or enemy):{" "}
          <a href={sudoku.shareUrl}>Share Link</a>{" "}
        </p>
      </div>
    );
  }
}