import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  // Boardで更新するようになったのでsquareでは不要な処理を削除、変更
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          // boardから渡されているthis.handleClick(i)が呼ばれる
          this.props.onClick();
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 9個の配列を用意して中身をすべてnullに
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    // 配列squaresのコピーを作成して定数squaresに入れてる...
    const squares = this.state.squares.slice();
    // クリックされたマス目の値がXになる
    squares[i] = 'X';
    // squareを更新
    this.setState({squares: squares});
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = "Next player: X";

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

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
