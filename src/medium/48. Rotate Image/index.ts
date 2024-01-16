const swapDiagonalCorner = (matrix: number[][]): void => {
  const maxRowIndex = matrix.length - 2;

  for (let rowIndex = 0; rowIndex <= maxRowIndex; rowIndex++) {
    for (
      let columnIndex = rowIndex + 1;
      columnIndex < matrix.length;
      columnIndex++
    ) {
      const temp = matrix[rowIndex][columnIndex];
      matrix[rowIndex][columnIndex] = matrix[columnIndex][rowIndex];
      matrix[columnIndex][rowIndex] = temp;
    }
  }
};

const swapLeftAndRight = (matrix: number[][]): void => {
  matrix.forEach((row, rowIndex) => {
    let columnStartIndex = 0;
    let columnEndIndex = matrix.length - 1;

    while (columnStartIndex < columnEndIndex) {
      const temp = matrix[rowIndex][columnStartIndex];
      matrix[rowIndex][columnStartIndex] = matrix[rowIndex][columnEndIndex];
      matrix[rowIndex][columnEndIndex] = temp;

      columnStartIndex++;
      columnEndIndex--;
    }
  });
};

/**
 Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix: number[][]): void => {
  swapDiagonalCorner(matrix);
  swapLeftAndRight(matrix);
};

export default rotate;
