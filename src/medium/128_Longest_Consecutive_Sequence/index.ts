const longestConsecutive = (nums: number[]): number => {
  const map = new Map<number, boolean>(
    nums.map((num) => {
      return [num, true];
    })
  );

  let result = 0;

  Array.from(map.keys()).forEach((num) => {
    let currentNum = num;
    let currentCount = 0;

    if (!map.has(currentNum - 1)) {
      while (map.has(currentNum)) {
        currentNum++;
        currentCount++;
      }
    }

    result = Math.max(result, currentCount);
  });

  return result;
};

export default longestConsecutive;
