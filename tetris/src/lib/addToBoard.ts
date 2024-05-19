import { BLOCKS, BlockType, BoardType } from './constants';

export const addToBoard = (
    board: BoardType,
    block: BlockType,

) => {

    const blockShape = BLOCKS[block].shape;
    const blockColor = BLOCKS[block].color;

    const newBoard = board.map((row, rowIndex) =>
        row.map((cell, cellIndex) => {
            if (blockShape[rowIndex] && blockShape[rowIndex][cellIndex]) {
                return blockColor;
            }
            return cell;
        })
    );

    return newBoard;
}


