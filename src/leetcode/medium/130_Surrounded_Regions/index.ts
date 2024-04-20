const isBoardO = (
  board: string[][],
  rowIndex: number,
  columnIndex: number
): boolean => {
  return (
    (rowIndex === 0 ||
      columnIndex === 0 ||
      rowIndex === board.length - 1 ||
      columnIndex === board[0].length - 1) &&
    board[rowIndex][columnIndex] === 'O'
  );
};

interface DfsParams {
  board: string[][];
  rowIndex: number;
  columnIndex: number;
}
const replaceBorderAndContinuousOByDfs = (params: DfsParams): void => {
  const { board, rowIndex, columnIndex } = params;

  if (
    rowIndex < 0 ||
    columnIndex < 0 ||
    rowIndex >= board.length ||
    columnIndex >= board[0].length ||
    board[rowIndex][columnIndex] !== 'O'
  ) {
    return;
  }

  board[rowIndex][columnIndex] = '$';
  replaceBorderAndContinuousOByDfs({
    board,
    rowIndex: rowIndex - 1,
    columnIndex,
  });
  replaceBorderAndContinuousOByDfs({
    board,
    rowIndex: rowIndex + 1,
    columnIndex,
  });
  replaceBorderAndContinuousOByDfs({
    board,
    rowIndex,
    columnIndex: columnIndex - 1,
  });
  replaceBorderAndContinuousOByDfs({
    board,
    rowIndex,
    columnIndex: columnIndex + 1,
  });
};

/**
 Do not return anything, modify board in-place instead.
 */
const solve = (board: string[][]): void => {
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < board[0].length; columnIndex++) {
      if (isBoardO(board, rowIndex, columnIndex)) {
        replaceBorderAndContinuousOByDfs({
          board,
          rowIndex,
          columnIndex,
        });
      }
    }
  }

  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < board[0].length; columnIndex++) {
      const cell = board[rowIndex][columnIndex];

      if (cell === '$') {
        board[rowIndex][columnIndex] = 'O';
      } else if (cell === 'O') {
        board[rowIndex][columnIndex] = 'X';
      }
    }
  }
};

export default solve;
