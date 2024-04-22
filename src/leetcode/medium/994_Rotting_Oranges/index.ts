const orangesRotting = (grid: number[][]): number => {
  let freshFruitCount = 0;
  let times = 0;
  const queue: Array<{ rowIndex: number; columnIndex: number }> = [];
  const rottingFruit = (rowIndex: number, columnIndex: number): void => {
    if (
      rowIndex < 0 ||
      columnIndex < 0 ||
      rowIndex === grid.length ||
      columnIndex === grid[0].length ||
      grid[rowIndex][columnIndex] !== 1
    ) {
      return;
    }

    grid[rowIndex][columnIndex] = 2;
    freshFruitCount--;
    queue.push({ rowIndex, columnIndex });
  };

  grid.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (cell === 1) {
        freshFruitCount++;
      } else if (cell === 2) {
        queue.push({ rowIndex, columnIndex });
      }
    });
  });

  while (queue.length > 0 && freshFruitCount > 0) {
    let queueLengthToBeConsumed = queue.length;

    while (queueLengthToBeConsumed > 0) {
      const rottingFruitPosition = queue.shift()!;

      rottingFruit(
        rottingFruitPosition.rowIndex + 1,
        rottingFruitPosition.columnIndex
      );
      rottingFruit(
        rottingFruitPosition.rowIndex - 1,
        rottingFruitPosition.columnIndex
      );
      rottingFruit(
        rottingFruitPosition.rowIndex,
        rottingFruitPosition.columnIndex + 1
      );
      rottingFruit(
        rottingFruitPosition.rowIndex,
        rottingFruitPosition.columnIndex - 1
      );

      queueLengthToBeConsumed--;
    }

    times++;
  }

  return freshFruitCount === 0 ? times : -1;
};

export default orangesRotting;
