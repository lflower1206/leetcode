interface DfsParams {
  grid: string[][];
  rowIndex: number;
  rowLength: number;
  columnIndex: number;
  columnLength: number;
}
const dfs = (params: DfsParams): void => {
  const { grid, rowIndex, rowLength, columnIndex, columnLength } = params;

  if (
    rowIndex < 0 ||
    columnIndex < 0 ||
    rowIndex >= rowLength ||
    columnIndex >= columnLength ||
    grid[rowIndex][columnIndex] === '0'
  ) {
    return;
  }

  grid[rowIndex][columnIndex] = '0';

  dfs({
    grid,
    rowIndex: rowIndex + 1,
    rowLength,
    columnIndex,
    columnLength,
  });
  dfs({
    grid,
    rowIndex: rowIndex - 1,
    rowLength,
    columnIndex,
    columnLength,
  });
  dfs({
    grid,
    rowIndex,
    rowLength,
    columnIndex: columnIndex + 1,
    columnLength,
  });
  dfs({
    grid,
    rowIndex,
    rowLength,
    columnIndex: columnIndex - 1,
    columnLength,
  });
};

const numIslands = (grid: string[][]): number => {
  const rowLength = grid.length;
  const columnLength = grid[0].length;

  let count = 0;

  for (let rowIndex = 0; rowIndex < rowLength; rowIndex++) {
    for (let columnIndex = 0; columnIndex < columnLength; columnIndex++) {
      if (grid[rowIndex][columnIndex] === '1') {
        count++;
        dfs({
          grid,
          rowIndex,
          rowLength,
          columnIndex,
          columnLength,
        });
      }
    }
  }

  return count;
};

export default numIslands;
