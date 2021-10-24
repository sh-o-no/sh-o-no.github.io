import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 関数コンポーネントに書き換え
function Square(props) {
  return (
    <button
      className="square"
      onClick={
        // boardから渡されているthis.handleClick(i)が呼ばれる
        props.onClick
      }
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 9個の配列を用意して中身をすべてnullに
      squares: Array(9).fill(null),
      // 初期値はtrue
      xIsNext: true,
    };
  }

  handleClick(i) {
    // 配列squaresのコピーを作成して定数squaresに入れてる...
    const squares = this.state.squares.slice();
    // 勝負がついた場合や、クリックしたところが埋まってた場合はリターン
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // Xを入れたら次はO
    squares[i] = this.state.xIsNext ? "X" : "O";
    // squareを更新
    this.setState({
      squares: squares,
      // 現在とは逆の状態（X↔O）
      xIsNext: !this.state.xIsNext,
    });
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
    // 勝負がついたか判断
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      // ついてたらwinnerを表示
      status = "winner: " + winner;
    } else {
      // まだなら次のプレーヤーを表示
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
