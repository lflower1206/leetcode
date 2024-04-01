interface DfsParams {
  heights: number[][];
  rowIndex: number;
  lastRowIndex: number;
  columnIndex: number;
  lastColumnIndex: number;
  prevHeight: number;
  isVisit: Map<string, boolean>;
}

const dfs = (params: DfsParams): void => {
  const {
    heights,
    rowIndex,
    lastRowIndex,
    columnIndex,
    lastColumnIndex,
    prevHeight,
    isVisit,
  } = params;

  if (
    rowIndex < 0 ||
    columnIndex < 0 ||
    rowIndex > lastRowIndex ||
    columnIndex > lastColumnIndex ||
    isVisit.has(`${rowIndex}-${columnIndex}`)
  ) {
    return;
  }

  const currentHeight = heights[rowIndex][columnIndex];

  if (currentHeight < prevHeight) {
    return;
  }

  isVisit.set(`${rowIndex}-${columnIndex}`, true);
  dfs({
    heights,
    rowIndex: rowIndex + 1,
    lastRowIndex,
    columnIndex,
    lastColumnIndex,
    prevHeight: currentHeight,
    isVisit,
  });
  dfs({
    heights,
    rowIndex: rowIndex - 1,
    lastRowIndex,
    columnIndex,
    lastColumnIndex,
    prevHeight: currentHeight,
    isVisit,
  });
  dfs({
    heights,
    rowIndex,
    lastRowIndex,
    columnIndex: columnIndex + 1,
    lastColumnIndex,
    prevHeight: currentHeight,
    isVisit,
  });
  dfs({
    heights,
    rowIndex,
    lastRowIndex,
    columnIndex: columnIndex - 1,
    lastColumnIndex,
    prevHeight: currentHeight,
    isVisit,
  });
};
const pacificAtlantic = (heights: number[][]): number[][] => {
  const isAbleToPacific = new Map<string, boolean>();
  const isAbleToAtlantic = new Map<string, boolean>();
  const lastRowIndex = heights.length - 1;
  const lastColumnIndex = heights[0].length - 1;

  for (let columnIndex = 0; columnIndex <= lastColumnIndex; columnIndex++) {
    dfs({
      heights,
      rowIndex: 0,
      lastRowIndex,
      columnIndex,
      lastColumnIndex,
      prevHeight: heights[0][columnIndex],
      isVisit: isAbleToPacific,
    });
    dfs({
      heights,
      rowIndex: lastRowIndex,
      lastRowIndex,
      columnIndex,
      lastColumnIndex,
      prevHeight: heights[lastRowIndex][columnIndex],
      isVisit: isAbleToAtlantic,
    });
  }

  for (let rowIndex = 0; rowIndex <= lastRowIndex; rowIndex++) {
    dfs({
      heights,
      rowIndex,
      lastRowIndex,
      columnIndex: 0,
      lastColumnIndex,
      prevHeight: heights[rowIndex][0],
      isVisit: isAbleToPacific,
    });
    dfs({
      heights,
      rowIndex,
      lastRowIndex,
      columnIndex: lastColumnIndex,
      lastColumnIndex,
      prevHeight: heights[rowIndex][lastColumnIndex],
      isVisit: isAbleToAtlantic,
    });
  }

  return Array.from(isAbleToPacific.keys()).reduce<number[][]>(
    (prevResult, key) => {
      if (isAbleToAtlantic.has(key)) {
        prevResult.push(key.split('-').map(Number));
      }

      return prevResult;
    },
    []
  );
};

export default pacificAtlantic;
