const longestConsecutive = (nums: number[]): number => {
  if (nums.length <= 1) {
    return nums.length;
  }

  const sorted = Array.from(new Set(nums)).sort((a, b) => a - b);
  let result = 1;
  let index = 0;

  while (index < sorted.length) {
    const start = sorted[index];
    let end = start;
    let times = 0;

    while (Math.abs(end - start) === times) {
      times++;
      index++;
      end = sorted[index];
    }

    result = Math.max(result, times);
  }

  return result;
};

export default longestConsecutive;
