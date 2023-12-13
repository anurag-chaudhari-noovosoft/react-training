import logo from './logo.svg';
import './App.css';
import {useState} from "react";

export default TicTacToe;


function TicTacToe() {
    const [isXTurn, setIsXTurn] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)]);

    const currentValues = history[history.length -1];

    return (
        <div>
            <div className="game-board">
                <Board />
            </div>
        </div>
    );
}

function Board() {

    const [isXTurn, setIsXTurn] = useState(true)
    const [boxes, setValue] = useState(Array(9).fill(null))

    function handleBoxClick(i) {
        if(boxes[i] || getWinner(boxes)) return;

        const squares = boxes.slice();

        if(isXTurn) {
            squares[i] = "X";
        }
        else {
            squares[i] = "O";
        }
        setValue(squares);
        setIsXTurn(!isXTurn)
    }

    function getWinner(boxes) {
        const winningCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let i=0;i<winningCombinations.length;i++) {
            const [a, b, c] = winningCombinations[i];
            if(boxes[a] === boxes[b] && boxes[b] === boxes[c]) {
                return boxes[a];
            }
        }
        return null;
    }

    const winner = getWinner(boxes);
    let result;

    if(winner) {
        result = 'Winner is: ' + (isXTurn ? 'O' : 'X');
    }
    else {
        result = 'Next turn:'+ (isXTurn ? 'X' : 'O');
    }

    return (
      <>
          <div className="board-row">
              <Square value={boxes[0]} onBoxClick={()=>handleBoxClick(0)}/>
              <Square value={boxes[1]} onBoxClick={()=>handleBoxClick(1)}/>
              <Square value={boxes[2]} onBoxClick={()=>handleBoxClick(2)}/>
          </div>
          <div className="board-row">
              <Square value={boxes[3]} onBoxClick={()=>handleBoxClick(3)}/>
              <Square value={boxes[4]} onBoxClick={()=>handleBoxClick(4)}/>
              <Square value={boxes[5]} onBoxClick={()=>handleBoxClick(5)}/>
          </div>
          <div className="board-row">
              <Square value={boxes[6]} onBoxClick={()=>handleBoxClick(6)}/>
              <Square value={boxes[7]} onBoxClick={()=>handleBoxClick(7)}/>
              <Square value={boxes[8]} onBoxClick={()=>handleBoxClick(8)}/>
          </div>
          <div><h3>{result}</h3></div>
      </>
  );
}

function Square({value, onBoxClick}) {

    return <button onClick={onBoxClick} className="square">{value}</button>
}