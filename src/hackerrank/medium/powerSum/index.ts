// Test case 3 time limit exceeded
const powerSum = (X: number, N: number): number => {
  const results = new Set<string>();
  const currentCombo: number[] = [];
  const powerMap = new Map<number, number>();
  const maxLength = Math.floor(X / N);

  const backtracking = (remainingCount: number, num: number): void => {
    if (remainingCount < 0) {
      return;
    }

    if (remainingCount === 0) {
      results.add(
        currentCombo
          .slice()
          .sort((a, b) => a - b)
          .join('-')
      );
      return;
    }

    for (let nextNum = num; nextNum <= maxLength; nextNum++) {
      if (currentCombo.includes(nextNum)) {
        continue;
      }

      if (!powerMap.has(nextNum)) {
        powerMap.set(nextNum, Math.pow(nextNum, N));
      }

      const nextRemainingCount = remainingCount - powerMap.get(nextNum)!;

      currentCombo.push(nextNum);
      backtracking(nextRemainingCount, num + 1);
      currentCombo.pop();
    }
  };

  backtracking(X, 1);

  return results.size;
};

export default powerSum;
