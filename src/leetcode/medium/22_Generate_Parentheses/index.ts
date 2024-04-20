interface DfsParams {
  parenthesis: string[];
  leftCount: number;
  rightCount: number;
  currentGeneratedParenthesis: string;
  length: number;
  totalLength: number;
}
const dfs = (params: DfsParams): void => {
  const {
    parenthesis,
    leftCount,
    rightCount,
    currentGeneratedParenthesis,
    length,
    totalLength,
  } = params;

  if (currentGeneratedParenthesis.length === totalLength) {
    parenthesis.push(currentGeneratedParenthesis);
    return;
  }

  if (leftCount < length) {
    dfs({
      parenthesis,
      leftCount: leftCount + 1,
      rightCount,
      currentGeneratedParenthesis: `${currentGeneratedParenthesis}(`,
      length,
      totalLength,
    });
  }

  if (rightCount < leftCount) {
    dfs({
      parenthesis,
      leftCount,
      rightCount: rightCount + 1,
      currentGeneratedParenthesis: `${currentGeneratedParenthesis})`,
      length,
      totalLength,
    });
  }
};
const generateParenthesis = (length: number): string[] => {
  const parenthesis: string[] = [];

  dfs({
    parenthesis,
    leftCount: 0,
    rightCount: 0,
    currentGeneratedParenthesis: '',
    length,
    totalLength: length * 2,
  });

  return parenthesis;
};

export default generateParenthesis;
