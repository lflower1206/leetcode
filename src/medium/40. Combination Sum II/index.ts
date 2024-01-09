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
    if (
      elementIndex > currentIndex &&
      candidates[elementIndex] === candidates[elementIndex - 1]
    ) {
      continue;
    }

    const currentCandidate = candidates[elementIndex];
    currentCombo.push(currentCandidate);
    currentSum += currentCandidate;

    backtracking(
      candidates,
      target,
      elementIndex + 1,
      currentSum,
      currentCombo,
      result
    );

    currentCombo.pop();
    currentSum -= currentCandidate;
  }
};
const combinationSum2 = (candidates: number[], target: number): number[][] => {
  const result: number[][] = [];
  const currentCombo: number[] = [];
  candidates.sort((a, b) => a - b);

  backtracking(candidates, target, 0, 0, currentCombo, result);

  return result;
};

export default combinationSum2;
