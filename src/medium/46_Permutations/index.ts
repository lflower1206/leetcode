const backtracking = (
  nums: number[],
  currentCombo: Set<number>,
  result: number[][]
): void => {
  if (currentCombo.size === nums.length) {
    result.push(Array.from(currentCombo));
    return;
  }

  nums.forEach((num) => {
    if (!currentCombo.has(num)) {
      currentCombo.add(num);
      backtracking(nums, currentCombo, result);
      currentCombo.delete(num);
    }
  });
};

const permute = (nums: number[]): number[][] => {
  const result: number[][] = [];
  const currentCombo = new Set<number>();

  backtracking(nums, currentCombo, result);

  return result;
};

export default permute;
