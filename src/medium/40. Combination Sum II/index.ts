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

    if (
      candidateIndex > currentIndex &&
      currentCandidate === candidates[candidateIndex - 1]
    ) {
      continue;
    }

    currentCombo.push(currentCandidate);
    currentSum += currentCandidate;

    backtracking(
      candidates,
      target,
      candidateIndex + 1,
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
