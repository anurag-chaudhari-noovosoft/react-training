import logo from './logo.svg';
import './App.css';
import {useState} from "react";

export default TicTacToe;


function TicTacToe() {
    const [currentMove, setCurrentMove] = useState(0);
    const isXTurn = currentMove % 2 === 0;
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentValues = history[currentMove];

    function handleMove(squares) {
        const nextHistory = [...history.slice(0, currentMove + 1), squares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    const moves = history.map((squares, move)=> {
        let step;
        if(move > 0) {
            step = "Go to move: " + move;
        }
        else {
            step = "Start the Game"
        }

       return  (
           <li key={move}>
               <button onClick={() => handleBackTrack(move)}>{step}</button>
           </li>
       );
    })

    function handleBackTrack(squares) {
        setCurrentMove(squares);
    }

    return (
        <div>
            <div className="game-board">
                <Board isXTurn={isXTurn} currentValues={currentValues} handleMove={handleMove}/>
            </div>
            <div>
                <ul>{moves}</ul>
            </div>
        </div>
    );
}

function Board({isXTurn, currentValues, handleMove}) {

    function handleBoxClick(i) {
        if(currentValues[i] || getWinner(currentValues)) return;

        const squares = currentValues.slice();

        if(isXTurn) {
            squares[i] = "X";
        }
        else {
            squares[i] = "O";
        }
        handleMove(squares);
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

    const winner = getWinner(currentValues);
    let result;

    if(winner) {
        result = 'Winner is: ' + (isXTurn ? 'O' : 'X');
    }
    else {
        result = 'Next turn:'+ (isXTurn ? 'X' : 'O');
    }

    return (
      <>
          <div><h3>{result}</h3></div>
          <div className="board-row">
              <Square value={currentValues[0]} onBoxClick={()=>handleBoxClick(0)}/>
              <Square value={currentValues[1]} onBoxClick={()=>handleBoxClick(1)}/>
              <Square value={currentValues[2]} onBoxClick={()=>handleBoxClick(2)}/>
          </div>
          <div className="board-row">
              <Square value={currentValues[3]} onBoxClick={()=>handleBoxClick(3)}/>
              <Square value={currentValues[4]} onBoxClick={()=>handleBoxClick(4)}/>
              <Square value={currentValues[5]} onBoxClick={()=>handleBoxClick(5)}/>
          </div>
          <div className="board-row">
              <Square value={currentValues[6]} onBoxClick={()=>handleBoxClick(6)}/>
              <Square value={currentValues[7]} onBoxClick={()=>handleBoxClick(7)}/>
              <Square value={currentValues[8]} onBoxClick={()=>handleBoxClick(8)}/>
          </div>
      </>
  );
}

function Square({value, onBoxClick}) {

    return <button onClick={onBoxClick} className="square">{value}</button>
}