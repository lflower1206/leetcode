const backtracking = (
  nums: number[],
  isUsed: boolean[],
  currentCombo: number[],
  result: number[][]
): void => {
  if (currentCombo.length === nums.length) {
    result.push(currentCombo.slice());
    return;
  }

  nums.forEach((num, numIndex) => {
    if (isUsed[numIndex]) {
      return;
    }

    if (numIndex > 0 && num === nums[numIndex - 1] && !isUsed[numIndex - 1]) {
      return;
    }

    isUsed[numIndex] = true;
    currentCombo.push(num);
    backtracking(nums, isUsed, currentCombo, result);
    isUsed[numIndex] = false;
    currentCombo.pop();
  });
};

const permuteUnique = (nums: number[]): number[][] => {
  const result: number[][] = [];
  const isUsed: boolean[] = Array(nums.length).fill(false);
  const currentCombo: number[] = [];

  nums.sort((a, b) => a - b);
  backtracking(nums, isUsed, currentCombo, result);

  return result;
};

export default permuteUnique;
