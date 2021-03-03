import React, { Component } from "react";

export default class Errors extends Component {
    render(){
        const { sudoku } = this.props;
        return(
            <h2>Errors : {sudoku.errors}</h2>
        )
    }
}