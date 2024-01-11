const jump = (nums: number[]): number => {
  const greedyResult = nums.reduce<number[]>(
    (previousValue, currentValue, index) => {
      if (index === 0) {
        return previousValue;
      }

      previousValue[index] = Math.max(
        index + currentValue,
        previousValue[index - 1]
      );
      return previousValue;
    },
    [nums[0]]
  );
  let jumpTimes = 0;
  let currentIndex = 0;

  while (currentIndex < greedyResult.length - 1) {
    jumpTimes++;
    currentIndex = greedyResult[currentIndex];
  }

  return jumpTimes;
};

export default jump;
