import { useEffect } from 'react';
import { BoardType } from '../lib/constants';
import Sqaure from './Square';

interface BoardProps {
  board: BoardType;
}

export default function Board({ board }: BoardProps) {
  // useEffect(() => {
  //   // console.log('board GETTING CHANGED', board);
  // }, [board]);
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cell, cellIndex) => (
            <Sqaure key={cellIndex} type={cell} />
          ))}
        </div>
      ))}
    </div>
  );
}
