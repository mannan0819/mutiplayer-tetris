import './App.css';
import Board from './components/Board';
import {
  BOARD_COLS,
  BOARD_ROWS,
  BlockType,
  EmptyCellType,
} from './lib/constants';

const newArray = (rows: number, cols: number) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => BlockType.I)
  );
};

function App() {
  return (
    <>
      <Board board={newArray(BOARD_ROWS, BOARD_COLS)} />
    </>
  );
}

export default App;
