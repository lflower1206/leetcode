const backtracking = (
  nums: number[],
  currentIndex: number,
  currentCombo: number[],
  result: number[][]
): void => {
  result.push(currentCombo.slice());

  for (let index = currentIndex; index < nums.length; index++) {
    currentCombo.push(nums[index]);
    backtracking(nums, index + 1, currentCombo, result);
    currentCombo.pop();
  }
};

const subsets = (nums: number[]): number[][] => {
  const result: number[][] = [];
  const currentCombo: number[] = [];

  backtracking(nums, 0, currentCombo, result);

  return result;
};

export default subsets;
