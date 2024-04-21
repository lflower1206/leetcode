const climbingLeaderboard = (ranked: number[], player: number[]): number[] => {
  const rankByIndex = ranked.reduce<number[]>((prev, currentRanked, index) => {
    if (index === 0) {
      prev.push(1);
    } else {
      const prevIndex = index - 1;
      const prevRank = prev[prevIndex];
      prev.push(currentRanked === ranked[prevIndex] ? prevRank : prevRank + 1);
    }
    return prev;
  }, []);
  const result: number[] = [];
  let rankedIndex = 0;

  for (let playerIndex = player.length - 1; playerIndex >= 0; playerIndex--) {
    const currentPlayerRank = player[playerIndex];

    for (; rankedIndex < ranked.length; rankedIndex++) {
      const currentRanked = ranked[rankedIndex];
      if (currentPlayerRank < currentRanked) {
        continue;
      }

      if (currentPlayerRank === currentRanked) {
        result.push(rankByIndex[rankedIndex]);
      } else {
        result.push(rankedIndex === 0 ? 1 : rankByIndex[rankedIndex]);
      }
      break;
    }
  }

  const missingLength = player.length - result.length;
  for (let index = 0; index < missingLength; index++) {
    result.push(rankByIndex[rankByIndex.length - 1] + 1);
  }

  return result.reverse();
};

export default climbingLeaderboard;
