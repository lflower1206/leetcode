const twoSum = (nums: number[], target: number): number[] => {
  const checkedMap = new Map<number, number>();
  let result: number[] = [];

  for (let index = 0; index < nums.length; index++) {
    const gap = target - nums[index];

    if (checkedMap.has(gap)) {
      result = [checkedMap.get(gap)!, index];
      break;
    }

    checkedMap.set(nums[index], index);
  }

  return result;
};

export default twoSum;
