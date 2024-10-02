import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import {
  BLOCKS,
  BOARD_COLS,
  BOARD_ROWS,
  Block,
  BlockType,
  BoardType,
  CellType,
  EmptyCellType,
} from './lib/constants';
import { rotate } from './utils/rotate';
import { moveActiveBlock } from './utils/moveActiveBlock';

const tickSpeed = 300;

const newArray = (rows: number, cols: number) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => EmptyCellType.EMPTY)
  );
};

const board = newArray(BOARD_ROWS, BOARD_COLS);

const getRandomBlock = (): Block => {
  const shape = 'I' as BlockType;
  return {
    type: shape,
    currentShape: BLOCKS.I.shapes[0],
  };
};

const addNewBlock = (
  block: Block | null,
  setActiveBlock: React.Dispatch<React.SetStateAction<Block | null>>,
  board: BoardType,
  setBoard: React.Dispatch<React.SetStateAction<BoardType>>
) => {
  if (!block) return null;
  const myBoard = board.map((row) => row.slice());
  const shape = BLOCKS[block.type].shapes[0];
  const currentPosition = [];
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col]) {
        console.log('row: ', row, ' col: ', col);
        myBoard[row][col] = block.type;
        currentPosition.push({
          x: row,
          y: col,
        });
      }
    }
  }

  console.log('curre position: ', currentPosition);
  setActiveBlock({
    ...block,
    currentPosition,
  });
  console.log('BLOCK HAS BEEN ADDED: ', block);
  setBoard(myBoard);
};

function App() {
  const [myBoardState, setMyBoard] = useState<BoardType>(board);
  const [activeBlock, setActiveBlock] = useState<null | Block>(null);

  useEffect(() => {
    if (!activeBlock) {
      console.log('ADDING NEW BLOCK');
      const newBlockToADd = getRandomBlock();
      console.log(newBlockToADd);
      addNewBlock(activeBlock, setActiveBlock, board, setMyBoard);
      setActiveBlock(newBlockToADd);
    }
  }, [activeBlock]);

  const tick = () => {
    console.log('tick');
    moveActiveBlock(myBoardState, setMyBoard, activeBlock, setActiveBlock);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        rotate(activeBlock, myBoardState, setMyBoard);
      }
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
