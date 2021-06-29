import React from 'react';

import Square from './Square';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          xIsNext: true,
        };
      }

      /** on click will alternate whos turn it is 
       * Squares is an array that fits 9
       * i represents the number in the array that is being clicked on
       * xIsNExt is a boolean that will determine if x or o will be in the square
       * this create a key value pair in the game
      */
      handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X': 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
      }

      /** this will handle what will be in the squares */
    renderSquare(i) {
        return <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
        />
    }
    render() {
        const status = 'Next player: ' + (this.state.xIsNext ? 'X': 'O');

        return (
          <div>
            <div className="status">{status}</div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
      }
}