const backtracking = (
  candidates: number[],
  target: number,
  currentIndex: number,
  currentSum: number,
  currentCombo: number[],
  result: number[][]
): void => {
  if (currentSum > target) {
    return;
  }

  if (currentSum === target) {
    result.push(currentCombo.slice());
    return;
  }

  for (
    let elementIndex = currentIndex;
    elementIndex < candidates.length;
    elementIndex++
  ) {
    const currentElement = candidates[elementIndex];
    currentCombo.push(currentElement);
    currentSum += currentElement;

    backtracking(
      candidates,
      target,
      elementIndex,
      currentSum,
      currentCombo,
      result
    );

    currentSum -= currentElement;
    currentCombo.pop();
  }
};
const combinationSum = (candidates: number[], target: number): number[][] => {
  const result: number[][] = [];
  const currentCombo: number[] = [];

  backtracking(candidates, target, 0, 0, currentCombo, result);

  return result;
};

export default combinationSum;
