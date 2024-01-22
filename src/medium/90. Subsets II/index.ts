const backtracking = (
  nums: number[],
  currentIndex: number,
  currentCombo: number[],
  result: number[][]
): void => {
  result.push(currentCombo.slice());

  for (
    let elementIndex = currentIndex;
    elementIndex < nums.length;
    elementIndex++
  ) {
    if (
      elementIndex > currentIndex &&
      nums[elementIndex] === nums[elementIndex - 1]
    ) {
      continue;
    }

    currentCombo.push(nums[elementIndex]);
    backtracking(nums, elementIndex + 1, currentCombo, result);
    currentCombo.pop();
  }
};

const subsetsWithDup = (nums: number[]): number[][] => {
  const result: number[][] = [];
  const currentCombo: number[] = [];
  nums.sort((a, b) => a - b);

  backtracking(nums, 0, currentCombo, result);

  return result;
};

export default subsetsWithDup;
