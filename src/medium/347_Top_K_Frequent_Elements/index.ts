const topKFrequent = (nums: number[], k: number): number[] => {
  const numCountMap = nums.reduce((map, num) => {
    map.set(num, (map.get(num) ?? 0) + 1);

    return map;
  }, new Map<number, number>());

  return Array.from(numCountMap.entries())
    .sort(([numA, numACount], [numB, numBCount]) => {
      return numBCount - numACount;
    })
    .slice(0, k)
    .map(([num, count]) => {
      return num;
    });
};

export default topKFrequent;
