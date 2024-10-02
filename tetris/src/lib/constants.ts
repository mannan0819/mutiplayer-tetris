export enum BlockType {
    I = 'I',
    J = 'J',
    L = 'L',
    O = 'O',
    S = 'S',
    T = 'T',
    Z = 'Z',
}

export type Block = {
    type: BlockType,
    currentShape: number[][],
    currentPosition?: { x: number, y: number }[] | undefined,
}

export enum EmptyCellType {
    EMPTY = 'EMPTY',
}
export type CellType = BlockType | EmptyCellType;
export type BoardType = CellType[][];

export const BLOCKS: Record<CellType, { shapes: number[][][], color: string }>
    = {
    [EmptyCellType.EMPTY]: {
        shapes: [],
        color: 'white',
    },
    [BlockType.I]: {
        shapes: [
            [
                [1, 1, 1, 1]
            ],
            [
                [1],
                [1],
                [1],
                [1]
            ]
        ],
        color: 'cyan',
    },
    [BlockType.J]: {
        shapes:
            [[
                [1, 1, 1],
                [0, 0, 1],
            ]],
        color: 'blue',
    },
    [BlockType.L]: {
        shapes:
            [[
                [1, 1, 1],
                [1, 0, 0],
            ]],
        color: 'orange',
    },
    [BlockType.O]: {
        shapes: [[
            [1, 1],
            [1, 1],
        ]],
        color: 'yellow',
    },
    [BlockType.S]: {
        shapes: [
            [
                [0, 1, 1],
                [1, 1, 0],
            ]
        ],
        color: 'green',
    },
    [BlockType.T]: {
        shapes: [
            [
                [1, 1, 1],
                [0, 1, 0],
            ]
        ],
        color: 'purple',
    },
    [BlockType.Z]: {
        shapes: [
            [
                [1, 1, 0],
                [0, 1, 1],
            ]
        ],
        color: 'red',
    },
};

export const BOARD_ROWS = 25;
export const BOARD_COLS = 12;