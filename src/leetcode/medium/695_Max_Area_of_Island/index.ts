interface BfsParams {
  grid: number[][];
  rowIndex: number;
  columnIndex: number;
  counter: [number];
  result: [number];
}

const dfs = (params: BfsParams): void => {
  const { grid, rowIndex, columnIndex, counter, result } = params;
  const rowLength = grid.length;
  const columnLength = grid[0].length;

  if (
    rowIndex < 0 ||
    columnIndex < 0 ||
    rowIndex >= rowLength ||
    columnIndex >= columnLength ||
    grid[rowIndex][columnIndex] === 0
  ) {
    return;
  }

  grid[rowIndex][columnIndex] = 0;
  counter[0] = counter[0] + 1;
  result[0] = Math.max(result[0], counter[0]);

  dfs({
    grid,
    rowIndex: rowIndex + 1,
    columnIndex,
    counter,
    result,
  });
  dfs({
    grid,
    rowIndex: rowIndex - 1,
    columnIndex,
    counter,
    result,
  });
  dfs({
    grid,
    rowIndex,
    columnIndex: columnIndex + 1,
    counter,
    result,
  });
  dfs({
    grid,
    rowIndex,
    columnIndex: columnIndex - 1,
    counter,
    result,
  });
};

const maxAreaOfIsland = (grid: number[][]): number => {
  const rowLength = grid.length;
  const columnLength = grid[0].length;

  const result: [number] = [0];

  for (let rowIndex = 0; rowIndex < rowLength; rowIndex++) {
    for (let columnIndex = 0; columnIndex < columnLength; columnIndex++) {
      if (grid[rowIndex][columnIndex] === 1) {
        const counter: [number] = [0];

        dfs({
          grid,
          rowIndex,
          columnIndex,
          counter,
          result,
        });
      }
    }
  }

  return result[0];
};

export default maxAreaOfIsland;
