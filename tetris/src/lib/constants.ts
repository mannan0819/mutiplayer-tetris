export enum BlockType {
    I = 'I',
    J = 'J',
    L = 'L',
    O = 'O',
    S = 'S',
    T = 'T',
    Z = 'Z',
}
export enum EmptyCellType {
    EMPTY = 'EMPTY',
}
export type CellType = BlockType | EmptyCellType;
export type BoardType = CellType[][];

export const BLOCKS = {
    [BlockType.I]: {
        shape: [
            [1, 1, 1, 1],
        ],
        color: 'cyan',
    },
    [BlockType.J]: {
        shape: [
            [1, 1, 1],
            [0, 0, 1],
        ],
        color: 'blue',
    },
    [BlockType.L]: {
        shape: [
            [1, 1, 1],
            [1, 0, 0],
        ],
        color: 'orange',
    },
    [BlockType.O]: {
        shape: [
            [1, 1],
            [1, 1],
        ],
        color: 'yellow',
    },
    [BlockType.S]: {
        shape: [
            [0, 1, 1],
            [1, 1, 0],
        ],
        color: 'green',
    },
    [BlockType.T]: {
        shape: [
            [1, 1, 1],
            [0, 1, 0],
        ],
        color: 'purple',
    },
    [BlockType.Z]: {
        shape: [
            [1, 1, 0],
            [0, 1, 1],
        ],
        color: 'red',
    },
};

export const BOARD_ROWS = 25;
export const BOARD_COLS = 12;