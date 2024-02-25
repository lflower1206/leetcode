const carFleet = (
  target: number,
  positions: number[],
  speeds: number[]
): number => {
  const combined = positions
    .map((position, index) => {
      return {
        position,
        time: (target - position) / speeds[index],
      };
    })
    .sort((a, b) => b.position - a.position);

  let currentSlowestTime = 0;
  let result = 0;

  combined.forEach(({ time }) => {
    if (time > currentSlowestTime) {
      currentSlowestTime = time;
      result++;
    }
  });

  return result;
};

export default carFleet;
