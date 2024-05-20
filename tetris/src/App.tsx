import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import {
  BLOCKS,
  BOARD_COLS,
  BOARD_ROWS,
  BlockType,
  BoardType,
  CellType,
  EmptyCellType,
} from './lib/constants';

const tickSpeed = 300;

const newArray = (rows: number, cols: number) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => EmptyCellType.EMPTY)
  );
};

const hasCollision = (
  board: BoardType, 
  row: number, col: number, 
  cellType: CellType) => {
    const shape = BLOCKS[cellType].shape;
    const lastRowOfShape = shape[shape.length - 1];
    return lastRowOfShape.some(
      (cell, i) => col && board[row + 1][col + i] !== EmptyCellType.EMPTY
    );
};

const hasLastRowCollision = (row: number, cellType: CellType) => {
  const shape = BLOCKS[cellType].shape;
  const lastRowOfShape = shape[shape.length - 1];
  return lastRowOfShape.some(cell => cell && row + 1 < BOARD_ROWS);
}



const calculateNewBoard = (myBoard: BoardType) => {
  const newBoard = myBoard.map((row) => row.slice()); // Create a deep copy of the board
  for (let row = BOARD_ROWS - 1; row >= 0; row--) {
    for (let col = 0; col < BOARD_COLS; col++) {
      if (
        newBoard[row][col] !== EmptyCellType.EMPTY &&
        hasLastRowCollision(row, newBoard[row][col])  &&
        !hasCollision(newBoard, row, col, newBoard[row][col]) &&
        newBoard[row + 1][col] === EmptyCellType.EMPTY
      ) {
        newBoard[row + 1][col] = newBoard[row][col];
        newBoard[row][col] = EmptyCellType.EMPTY;
      }
    }
  }
  return newBoard;
};

const board = newArray(BOARD_ROWS, BOARD_COLS);

const getRandomBlock = () => {
  const blocks = Object.keys(BLOCKS);
  return blocks[Math.floor(Math.random() * blocks.length)] as BlockType;
};

const addNewBlock = (board: BoardType) => {
  const block: BlockType = getRandomBlock();
  const shape = BLOCKS[block].shape;
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col]) {
        board[row][col] = block;
      }
    }
  }
};
addNewBlock(board);

function App() {
  const [myBoardState, setMyBoard] = useState<BoardType>(board);
  // newArray(BOARD_ROWS, BOARD_COLS);

  const tick = () => {
    console.log('tick');
    console.log(myBoardState);
    setMyBoard((prevBoard) => {
      // Calculate the new board state based on prevBoard
      const newBoard = calculateNewBoard(prevBoard);
      return newBoard;
    });
  };

  useEffect(() => {
    console.log('use Effect called')
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log(event.key);
    };

    window.addEventListener('keydown', handleKeyDown);
    setInterval(() => {
      tick();
    }, tickSpeed);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Board board={myBoardState} />
    </>
  );
}

export default App;
