import { Block, BLOCKS, BlockType, BoardType } from '../lib/constants';

export const rotate = (
    activeBlock: Block | null,
    myBoardState: BoardType,
    setMyBoard: React.Dispatch<React.SetStateAction<BoardType>>) => {

    if (!activeBlock) return;
    const myBoard = myBoardState.map((row) => row.slice()); // deep copy the board

    // for (let row = BOARD_ROWS - 1; row >= 0; row--) {
    //     for (let col = 0; col < BOARD_COLS; col++) {
    //       if (
    //         newBoard[row][col] !== EmptyCellType.EMPTY &&
    //         hasLastRowCollision(row, newBoard[row][col]) &&
    //         !hasCollision(newBoard, row, col, newBoard[row][col]) &&
    //         newBoard[row + 1][col] === EmptyCellType.EMPTY
    //       ) {
    //         newBoard[row + 1][col] = newBoard[row][col];
    //         newBoard[row][col] = EmptyCellType.EMPTY;
    //       }
    //     }
    //   }


    // const currentShape = Block activeBlock;
    setMyBoard(myBoard)

}