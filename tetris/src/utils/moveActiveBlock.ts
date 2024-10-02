import { Block, BoardType, EmptyCellType } from '../lib/constants';

export const moveActiveBlock = (
    myBoard: BoardType,
    setMyBoard: React.Dispatch<React.SetStateAction<BoardType>>,
    activeBlock: Block | null,
    setActiveBlock: React.Dispatch<React.SetStateAction<Block | null>>
) => {
    if (!activeBlock) return;
    const newBoard = myBoard.map((row) => row.slice());
    if (!activeBlock.currentPosition) return
    console.log('first position')
    console.log(activeBlock.currentPosition)
    activeBlock.currentPosition.forEach(cord => {
        newBoard[cord.x][cord.y] = EmptyCellType.EMPTY;
    })

    setActiveBlock({
        ...activeBlock,
        currentPosition: activeBlock.currentPosition.map(cord => ({
            x: cord.x + 1,
            y: cord.y
        }))
    })

    activeBlock.currentPosition.forEach(cord => {
        newBoard[cord.x][cord.y] = activeBlock.type
    })
    setMyBoard(newBoard)
};