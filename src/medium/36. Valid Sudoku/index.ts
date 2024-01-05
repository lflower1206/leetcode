const isValidSudoku = (board: string[][]): boolean => {
  const map = new Map<string, boolean>();
  let isValid = true;
  let row = 0;

  while (isValid && row < board.length) {
    let column = 0;

    while (isValid && column < board[row].length) {
      const value = board[row][column];

      if (value !== '.') {
        const rowKey = `r${row}-${value}`;
        const columnKey = `c${column}-${value}`;
        const subBoxKey = `r${Math.floor(row / 3)}c${Math.floor(
          column / 3
        )}-${value}`;

        if (map.has(rowKey) || map.has(columnKey) || map.has(subBoxKey)) {
          isValid = false;
          break;
        }

        map.set(rowKey, true);
        map.set(columnKey, true);
        map.set(subBoxKey, true);
      }
      column++;
    }

    row++;
  }

  return isValid;
};

export default isValidSudoku;
