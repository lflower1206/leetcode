interface DpParams {
  coins: number[];
  currentAmount: number;
  resultMap: Map<number, number>;
}
const dp = (params: DpParams): number => {
  const { coins, currentAmount, resultMap } = params;
  let numOfCoins = Number.MAX_SAFE_INTEGER;

  if (resultMap.has(currentAmount)) {
    return resultMap.get(currentAmount)!;
  }

  if (currentAmount === 0) {
    return 0;
  }

  if (currentAmount < 0) {
    return -1;
  }

  for (let index = 0; index < coins.length; index++) {
    const coin = coins[index];
    const result = dp({
      coins,
      currentAmount: currentAmount - coin,
      resultMap,
    });

    if (result === -1) {
      continue;
    }

    numOfCoins = Math.min(numOfCoins, 1 + result);
  }

  resultMap.set(
    currentAmount,
    numOfCoins === Number.MAX_SAFE_INTEGER ? -1 : numOfCoins
  );

  return resultMap.get(currentAmount)!;
};
const coinChange = (coins: number[], amount: number): number => {
  return dp({
    coins,
    currentAmount: amount,
    resultMap: new Map<number, number>(),
  });
};

export default coinChange;
