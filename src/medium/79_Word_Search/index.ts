interface BacktrackingParams {
  board: string[][];
  word: string;
  height: number;
  width: number;
  isUsed: boolean[][];
  currentWordIndex: number;
  currentRowIndex: number;
  currentColumnIndex: number;
}
const backtracking = (params: BacktrackingParams): boolean => {
  const {
    board,
    word,
    height,
    width,
    isUsed,
    currentWordIndex,
    currentRowIndex,
    currentColumnIndex,
  } = params;
  const isIndexOutOfRange =
    currentRowIndex < 0 ||
    currentColumnIndex < 0 ||
    currentRowIndex >= height ||
    currentColumnIndex >= width;

  if (
    isIndexOutOfRange ||
    isUsed[currentRowIndex][currentColumnIndex] ||
    board[currentRowIndex][currentColumnIndex] !== word.charAt(currentWordIndex)
  ) {
    return false;
  }

  if (currentWordIndex === word.length - 1) {
    return true;
  }

  isUsed[currentRowIndex][currentColumnIndex] = true;

  const baseParams = {
    board,
    word,
    height,
    width,
    isUsed,
    currentWordIndex: currentWordIndex + 1,
    currentRowIndex,
    currentColumnIndex,
  };
  const isNearbyFound =
    backtracking({
      ...baseParams,
      currentRowIndex: currentRowIndex + 1,
    }) ||
    backtracking({
      ...baseParams,
      currentRowIndex: currentRowIndex - 1,
    }) ||
    backtracking({
      ...baseParams,
      currentColumnIndex: currentColumnIndex + 1,
    }) ||
    backtracking({
      ...baseParams,
      currentColumnIndex: currentColumnIndex - 1,
    });

  isUsed[currentRowIndex][currentColumnIndex] = false;

  return isNearbyFound;
};

const exist = (board: string[][], word: string): boolean => {
  const height = board.length;
  const width = board[0].length;
  const firstChar = word.charAt(0);
  const isUsed: boolean[][] = Array(height)
    .fill([])
    .map(() => {
      return Array(width).fill(false);
    });

  return board.some((row, rowIndex) => {
    return row.some((char, columnIndex) => {
      if (char === firstChar) {
        return backtracking({
          board,
          word,
          height,
          width,
          isUsed,
          currentWordIndex: 0,
          currentRowIndex: rowIndex,
          currentColumnIndex: columnIndex,
        });
      }

      return false;
    });
  });
};

export default exist;
