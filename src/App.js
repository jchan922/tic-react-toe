import React, { Component } from 'react';
import './App.css';

class App extends Component {

    // Component Initialization
    constructor(props){
        super(props)
        this.state = {
            player_one: "X",
            player_two: "O",
            currentTurn: "X",
            board: [
                "", "", "", "", "", "", "", "", ""
            ]
        }
    }


    handleClick(index){
        if(this.state.board[index] === "") {
            this.state.board[index] = this.state.currentTurn;
            this.setState({
                board: this.state.board,
                currentTurn: this.state.currentTurn === this.state.player_one ? this.state.player_two : this.state.player_one
            })
        }
    }

    // Component Render
    render() {
        return (
            <div className="board">
                {this.state.board.map((cell, index) => {
                    return <div onClick={() => this.handleClick(index)} key={index} className="square">{cell}</div>;
                })};
            </div>
        )
    }
}
export default App;
