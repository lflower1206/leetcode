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
    let candidateIndex = currentIndex;
    candidateIndex < candidates.length;
    candidateIndex++
  ) {
    const currentCandidate = candidates[candidateIndex];

    currentCombo.push(currentCandidate);
    currentSum += currentCandidate;

    backtracking(
      candidates,
      target,
      candidateIndex,
      currentSum,
      currentCombo,
      result
    );

    currentCombo.pop();
    currentSum -= currentCandidate;
  }
};

const combinationSum = (candidates: number[], target: number): number[][] => {
  const result: number[][] = [];
  const currentCombo: number[] = [];

  backtracking(candidates, target, 0, 0, currentCombo, result);

  return result;
};

export default combinationSum;
